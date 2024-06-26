import Image from "next/image";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const device: string[] = ["Mobile apps", "Web app", "Console", "Database"];

const WebMobile = () => {
  return (
    <div className="grid md:grid-cols-7 gap-2 ">
      <div className="col-span-3 ">
        <SectionHeader label="Custom Web/Mobile App" />

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 2 }}
          className="text-grey-100 text-base mb-6"
        >
          Institution gets exclusive application deployed just for them. They
          will enjoy customized experience which they can brand to their own
          unique needs
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 2.3 }}
          className="flex flex-col space-y-4 pl-1"
        >
          {device.map((item, idx) => (
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
        transition={{ duration: 2.4 }}
        className="col-span-4 flex justify-center items-center"
      >
        <Image
          src={"/svg/PC-mobile.svg"}
          alt="communication image"
          width={1000}
          height={1000}
          className="md:w-[70%] rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default WebMobile;
