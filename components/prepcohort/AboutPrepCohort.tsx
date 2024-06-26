"use client";

import Image from "next/image";
import Container from "../Container";

import { motion } from "framer-motion";

const AboutPrepCohort = () => {
  return (
    <div className="bg-gradient-to-r from-[#FAABE9] to-[#C2B5D191]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center  py-4">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.5 }}
            className=" text-base md:text-[24px]"
          >
            The world’s most innovative institutions, colleges, companies use
            our app. One of them is Prepcohort
          </motion.p>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={"/svg/prep-cohort.svg"}
              alt="prep cohort"
              width={1000}
              height={1000}
              className="w-[140px] md:w-[180px]"
            />{" "}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPrepCohort;
