import Image from "next/image";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const communication: string[] = [
  "Question and Answer",
  "Announcement",
  "Integrated Polls",
  "One-on-one Support",
];

const Communication = () => {
  return (
    <div className="grid md:grid-cols-7 space-y-6 gap-2 ">
      <div className="col-span-3 ">
        <SectionHeader label="Communication System" />

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1.1 }}
          className="text-grey-100 text-base mb-6"
        >
          With Study4As, schools get comprehensive communication system,
          facilitating ideal interaction and collaboration with the virtual
          learning environment
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col space-y-4 pl-1"
        >
          {communication.map((item, idx) => (
            <div className="flex space-x-4 items-center" key={idx}>
              <span className="rounded-full w-2.5 h-2.5 bg-primary-100" />
              <p className="text-black-100 text-base">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 1.5 }}
        className="col-span-4 flex justify-center items-center"
      >
        <Image
          src={"/svg/communication-1.svg"}
          alt="communication image"
          width={1000}
          height={1000}
          className="w-[90%] md:w-[70%] rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default Communication;
