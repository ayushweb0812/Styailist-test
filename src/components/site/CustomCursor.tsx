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

const colors = ["text-neon-pink", "text-neon-purple", "text-primary", "text-rose"];

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
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let particleId = 0;

    const handleMouseDown = (e: MouseEvent) => {
      // Spawn burst particles anywhere the user clicks
      const burstParticles: Particle[] = Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8 + Math.random() * 0.5;
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
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousedown", handleMouseDown);
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

  if (!isClient || isMobile) return null;

  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`pointer-events-none fixed left-0 top-0 z-[9998] ${p.color}`}
          initial={{
            opacity: 0.8,
            scale: 1,
            x: p.x - p.size / 2,
            y: p.y - p.size / 2,
            rotate: 0,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: p.targetX! - p.size / 2,
            y: p.targetY! - p.size / 2,
            rotate: 180,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StarSparkle size={p.size} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
