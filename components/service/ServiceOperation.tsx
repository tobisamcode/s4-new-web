import Image from "next/image";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const service: string[] = ["Private", "Public (Marketplace)", "Both"];

const ServiceOperation = () => {
  return (
    <div className="grid grid-cols-7 gap-2 ">
      <div className="col-span-3 ">
        <SectionHeader label="Service Operation Mode" />

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="text-grey-100 text-base mb-6"
        >
          Operating in a versatile service mode, Study4as offers the flexibility
          of private, public and combined settings, based on specific needs and
          preferences
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2.4 }}
          className="flex flex-col space-y-4 pl-1"
        >
          {service.map((item, idx) => (
            <div className="flex space-x-4 items-center" key={idx}>
              <span className="rounded-full w-2.5 h-2.5 bg-primary-100" />
              <p className="text-black-100 text-base">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.4 }}
        className="col-span-4 flex justify-center items-center"
      >
        <Image
          src={"/img/service.png"}
          alt="communication image"
          width={1000}
          height={1000}
          className="w-[70%] rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default ServiceOperation;
