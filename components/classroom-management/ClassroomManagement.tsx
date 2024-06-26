"use client";

import Image from "next/image";
import Container from "../Container";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const classroomManagements: string[] = [
  "Creation of courses",
  "Group creation / management",
  "Question and answer",
  "Feedback",
  "Syllabus creation",
  "Grading system",
  "Integrated quiz",
  "Integrated form",
  "Invitation to class",
  "Reusable resources",
];

const ClassroomManagement = () => {
  return (
    <section className="bg-gradient-to-r from-white via-gray-200 to-gray-400  ">
      <Container className=" py-16 md:py-32">
        <div className="grid space-y-6 md:grid-cols-7 space-x-0">
          <div className="col-span-4 ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 1.5 }}
              className="flex w-full  justify-center items-center"
            >
              <Image
                src={"/svg/classroom.svg"}
                alt="classroom"
                width={1000}
                height={1000}
                className="w-[800px] "
              />
            </motion.div>
          </div>

          <div className="col-span-3">
            <SectionHeader label="Classroom Management" />

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 1.1 }}
              className="text-grey-100 text-base md:text-[20px] mb-6"
            >
              Studey4As equips educators with tools to effortlessly conduct
              classroom lessons, ensuring a smooth and uninterrupted delivery of
              instruction
            </motion.p>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col space-y-4"
            >
              {classroomManagements.map((item, idx) => (
                <div className="flex space-x-4 items-center" key={idx}>
                  <span className="rounded-full w-2.5 h-2.5 bg-primary-100" />
                  <p className="text-black-100 text-base">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClassroomManagement;
