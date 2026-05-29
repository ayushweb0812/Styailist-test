import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX?: number;
  targetY?: number;
  size: number;
  color: string;
}

const colors = [
  "text-neon-pink",
  "text-neon-purple",
  "text-primary",
  "text-rose",
];

// A custom, premium 4-point star SVG instead of the default Lucide icon
const StarSparkle = ({ size, className = "" }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
  </svg>
);

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let particleId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add trailing particle on movement
      if (Math.random() > 0.3) {
        setParticles((prev) => [
          ...prev.slice(-30), // keep max 30 particles to allow room for bursts
          {
            id: particleId++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 12 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
          },
        ]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("[role='button']")) {
        setIsClicking(true);
        
        // Spawn burst particles
        const burstParticles: Particle[] = Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8 + (Math.random() * 0.5);
          const distance = 40 + Math.random() * 40; // 40 to 80px burst radius
          return {
            id: particleId++,
            x: e.clientX,
            y: e.clientY,
            targetX: e.clientX + Math.cos(angle) * distance,
            targetY: e.clientY + Math.sin(angle) * distance,
            size: Math.random() * 16 + 8,
            color: colors[Math.floor(Math.random() * colors.length)],
          };
        });
        
        setParticles((prev) => [...prev.slice(-20), ...burstParticles]);
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Remove particles over time
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [particles]);

  if (!isClient) return null;

  return (
    <>
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>
      
      {/* Main Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] text-primary"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ 
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { type: "spring", stiffness: 400, damping: 25 }
        }}
      >
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.15, 1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <StarSparkle size={24} className="drop-shadow-[0_0_8px_rgba(255,105,180,0.6)]" />
        </motion.div>
      </motion.div>

      {/* Trailing and Burst Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`pointer-events-none fixed left-0 top-0 z-[9998] ${p.color}`}
            initial={{ opacity: 0.8, scale: 1, x: p.x - p.size / 2, y: p.y - p.size / 2, rotate: 0 }}
            animate={
              p.targetX !== undefined
                ? { opacity: 0, scale: 0, x: p.targetX - p.size / 2, y: p.targetY! - p.size / 2, rotate: 180 }
                : { opacity: 0, scale: 0, y: p.y + 20, rotate: 180 }
            }
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: p.targetX !== undefined ? 0.6 : 0.8, ease: "easeOut" }}
          >
            <StarSparkle size={p.size} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
