"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.2 }}
      className="text-primary-100 font-[500] text-[24px] md:text-[40px] mb-4"
    >
      {label}
    </motion.h1>
  );
};

export default SectionHeader;
