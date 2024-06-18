import Image from "next/image";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const staff: string[] = [
  "Role creation",
  "Role assignment ",
  "Role permission",
  "Role retraction",
  "Staff onboarding",
  "Super admin role",
  "Multiple role assignment",
  "Permission removal",
];

const float = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [6, -6],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Staff = () => {
  return (
    <div className="grid grid-cols-7 gap-2 ">
      <div className="col-span-4 flex items-center ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <Image
            src={"/img/staff.png"}
            alt="communication image"
            width={1000}
            height={1000}
            className="w-[80%] rounded-md "
          />
          <motion.div
            //@ts-ignore
            variants={float(2.3)}
            initial="initial"
            animate="animate"
            className="w-[150px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute -left-12 -top-12"
          >
            Enhance staff management
          </motion.div>
          <motion.div
            //@ts-ignore
            variants={float(2)}
            initial="initial"
            animate="animate"
            className="w-[130px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute right-12 top-[45%]"
          >
            Maximum admin role
          </motion.div>
          <motion.div
            //@ts-ignore
            variants={float(2.7)}
            initial="initial"
            animate="animate"
            className="w-[170px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute -left-12 -bottom-12"
          >
            Allows overseeing activities
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-3 ">
        <SectionHeader label="Role/Staff Management" />

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.1 }}
          className="text-grey-100 text-base mb-6"
        >
          Schools can efficiently manage staff roles and appointments on
          Study4As, empowering administrators to assign specific roles to
          educators and other staff members
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col space-y-4 pl-1"
        >
          {staff.map((item, idx) => (
            <div className="flex space-x-4 items-center" key={idx}>
              <span className="rounded-full w-2.5 h-2.5 bg-primary-100" />
              <p className="text-black-100 text-base">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Staff;
