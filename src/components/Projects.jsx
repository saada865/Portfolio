import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="lg:mx-48 lg:mb-20 border-b border-neutral-800">
      <div
        className="my-4 flex flex-col flex-wrap text-center justify-center
      items-center "
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl my-10"
        >
          Projects
        </motion.div>
        {PROJECTS.map((item, index) => (
          <div key={index} className=" flex text-left ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <a href={item.link}>
                <img
                  className=" sm:w-1/4 lg:w-2/6 m-3"
                  src={item.image}
                  alt=""
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex flex-col w-1/2 "
            >
              <div className="text-sm text-neutral-300 my-1">{item.title}</div>
              <div className="text-sm text-neutral-500 my-1">
                {item.description}
              </div>
              <div
                className="flex mx-2 my-2 text-xs px-2 
              "
              >
                {item.technologies.map((tech, index) => (
                  <div
                    className="text-purple-500 bg-white mx-2
                  p-1 rounded-md bg-opacity-10"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
