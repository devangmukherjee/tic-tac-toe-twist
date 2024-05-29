import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

interface BlockProps {
  value?: string;
  onClick: () => void;
  opacity: number;
  highlight: boolean;
}

export const Block: React.FC<BlockProps> = ({
  value,
  onClick,
  opacity,
  highlight,
}) => (
  <motion.div
    className={cn(
      "select-none rounded-2xl h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 m-0.5 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] relative z-20 flex items-center justify-center",
      highlight ? "bg-neutral-200 dark:bg-slate-800/[0.8]" : ""
    )}
    onClick={onClick}
    style={{ opacity }}
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-white text-4xl select-none">{value}</span>
  </motion.div>
);
