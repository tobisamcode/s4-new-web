import Image from "next/image";
import SectionHeader from "../Header";

import { motion } from "framer-motion";

const study: string[] = [
  "Course completion",
  "Participation",
  "Weekly calclation",
  "Cumulative estimation",
  "Scores report",
  "Speed report",
  "Confidence report",
  "Graphical analytic report",
  "Learning motivation module",
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

const StudyTracking = () => {
  return (
    <div className="grid grid-cols-7 gap-6 ">
      <div className="col-span-4 flex justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="relative"
        >
          <Image
            src={"/svg/study-track.svg"}
            alt="communication image"
            width={1000}
            height={1000}
            className="w-[500px] rounded-md "
          />
          <motion.div
            //@ts-ignore
            variants={float(2.3)}
            initial="initial"
            animate="animate"
            className="w-[150px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute -left-12 -top-0"
          >
            Comprehensive reports
          </motion.div>
          <motion.div
            //@ts-ignore
            variants={float(2)}
            initial="initial"
            animate="animate"
            className="w-[150px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute right-0 top-[45%]"
          >
            Supports Overview Result
          </motion.div>
          <motion.div
            //@ts-ignore
            variants={float(2.7)}
            initial="initial"
            animate="animate"
            className="w-[170px] flex justify-center items-center bg-white rounded-[5px] p-2 border-[.5px] border-gray-600 absolute -left-12 -bottom-0"
          >
            Graphical representations
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-3 ">
        <SectionHeader label="Study Tracking" />

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          className="text-grey-100 text-base mb-6"
        >
          Efficiently monitor and analyze student progress. Educators get
          valuable insights into individual learning journeys for optimized
          teaching strategies
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.4 }}
          className="flex flex-col space-y-4 pl-1"
        >
          {study.map((item, idx) => (
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

export default StudyTracking;
