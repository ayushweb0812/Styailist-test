import { motion } from "framer-motion";

export function SectionLoader({ className = "py-32" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-neon-pink/30 border-t-neon-pink"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-0 blur-md rounded-full bg-neon-pink/20 animate-pulse" />
      </div>
    </div>
  );
}
