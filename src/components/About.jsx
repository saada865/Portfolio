import React from "react";
import image from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="lg:mb-20 text-center border-t border-neutral-800">
      <div className="text-3xl mt-10 mb-20">
        About
        <span className="text-neutral-500"> Me</span>
      </div>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 my-2"
        >
          <img className="rounded-lg" src={image} alt="image" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-left 
        text-sm "
        >
          {ABOUT_TEXT}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
