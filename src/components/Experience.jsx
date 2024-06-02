import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      className=" mt-10 border-b
   border-neutral-800 lg:mx-48 mb-6"
    >
      <div className=" flex flex-col text-center">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-4 lg:mb-16"
        >
          Education/Experience
        </motion.h1>
      </div>
      {/* <div className=""> */}
      {EXPERIENCES.map((item, index) => (
        <div key={index} className="flex mb-10 text-left justify-between">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className=" text-sm text-neutral-500 w-1/2"
          >
            {item.year}{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col text-left w-1/2"
          >
            <div className=" text-neutral-300 text-sm">
              {item.role}
              <span>
                {" - "}
                {item.company}
              </span>
            </div>
            <div className=" my-2 text-neutral-500 text-sm">
              {item.description}
            </div>
            <div
              className="flex my-2 mx-2 px-2 text-purple-500 
               text-xs  "
            >
              {item.technologies.map((tech, index) => (
                <div
                  className=" bg-white bg-opacity-10 
                  rounded-md mx-2 p-1 "
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Experience;
