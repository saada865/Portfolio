import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
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

const Technologies = () => {
  return (
    <div className="lg:mb-20 border-t border-b border-neutral-800 pb-24">
      <div className="flex flex-col flex-wrap text-center justify-center items-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-3xl mb-10 mt-20 "
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className=" flex flex-wrap lg:w-full text-center items-center justify-center "
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <RiReactjsLine className=" h-12 w-12 text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <TbBrandNextjs className="h-12 w-12 text-neutral-300" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <SiMongodb className=" h-12 w-12 text-green-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <DiPython className="h-12 w-12 text-red-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <FaNodeJs className="h-12 w-12 text-green-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className=" border-2 rounded-lg border-neutral-800 p-3 mr-3"
          >
            <BiLogoFlask className="h-12 w-12 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
