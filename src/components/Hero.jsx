import React from "react";
import { HERO_CONTENT } from "../constants";
// import img from "../assets/my_image.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="   lg:mb-20 ">
      <div className="flex flex-wrap ">
        <div className="mt-10 mb-10 w-full flex flex-col  text-left pr-8">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-8xl font-thin text-white
        pb-16 tracking-tight "
          >
            Saad Ahmad Malik
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300
          via-slate-500 to-purple-500 text-transparent
           bg-clip-text text-3xl mb-5"
          >
            Full Stack Developer
          </motion.span>
          <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-sm "
          >
            {HERO_CONTENT}
          </motion.span>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" my-2"
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
