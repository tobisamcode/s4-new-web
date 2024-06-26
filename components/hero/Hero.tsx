"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import { motion } from "framer-motion";

const float = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-100 via-purple-700 to-primary-200 py-16 md:py-32 -mt-4  overflow-x-hidden ">
      <motion.div
        //@ts-ignore
        variants={float(2.3)}
        initial="initial"
        animate="animate"
        className="absolute top-10 left-12 bg-gradient-to-r from-[#6020A01F] to-[#EAE0F3AB] h-10 w-10 rounded-full"
      ></motion.div>
      <motion.div
        //@ts-ignore
        variants={float(2)}
        initial="initial"
        animate="animate"
        className="absolute top-10 left-64 md:left-[600px] lg:left-[700px] bg-gradient-to-r from-[#6020A01F] to-[#EAE0F3AB] h-10 w-10 rounded-full"
      ></motion.div>
      <motion.div
        //@ts-ignore
        variants={float(2.3)}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 bg-gradient-to-r from-[#6020A01F] to-[#EAE0F3AB] h-[160px] w-[160px] rounded-full"
      ></motion.div>
      <motion.div
        //@ts-ignore
        variants={float(2.5)}
        initial="initial"
        animate="animate"
        className="absolute bottom-40 left-64 md:left-96 bg-gradient-to-r from-[#6020A01F] to-[#EAE0F3AB] h-[114px] w-[114px] rounded-full"
      ></motion.div>

      <Container className="h-full">
        <div className="grid space-y-8 md:grid-cols-7 space-x-4 h-full">
          <div className="col-span-3 h-full flex flex-col justify-center space-y-4 md:space-y-8">
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 10 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-[24px] md:text-[32px] lg:text-[40px] text-white font-[600]"
            >
              Transform traditional education with Study4As, a cutting-edge
              classroom as a service
            </motion.p>

            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 10 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-[18px] font-[500] text-white"
            >
              Study4As serves as a robust learning management designed
              specifically for institutions. Access comprehensive features
              tailored to make learning easy
            </motion.p>

            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 10 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button outline label="Explore With Us" />
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 10 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative col-span-4 bg-[length:600px_250px] md:bg-[length:700px_400px] bg-eclipse-bg bg-center py-8 bg-no-repeat flex justify-center items-center"
          >
            <Image
              src={"/svg/hero-img.svg"}
              width={1000}
              height={1000}
              alt="hero image"
              className="w-[300px] md:w-[400px] lg:w-[600px] object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
