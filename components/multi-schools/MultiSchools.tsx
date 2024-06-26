"use client";

import Image from "next/image";
import Container from "../Container";

import { motion } from "framer-motion";

const MultiSchools = () => {
  return (
    <div className="py-8 bg-gradient-to-l from-white via-purple-100 to-purple-200">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.4 }}
            className="text-[28px] md:text-[48px] font-[500] mb-2"
          >
            Multi-school Instances
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.7 }}
            className="text-black-100 text-sm md:text-base md:w-[60%] mb-10"
          >
            Join our platform as a teacher to connect with a diverse pool of
            students. Expand your reach and impact a broader community of eager
            learners.
          </motion.p>

          <Image
            src={"/svg/multi.svg"}
            alt="multi-schools"
            width={1000}
            height={1000}
          />
        </div>
      </Container>
    </div>
  );
};

export default MultiSchools;
