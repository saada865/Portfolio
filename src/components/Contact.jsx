import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className=" flex flex-col text-center">
      <div className="text-neutral-200">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-5xl mb-10"
        >
          Get in Touch
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          {CONTACT.address}
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          {CONTACT.phoneNo}
        </motion.div>
        <div>{CONTACT.email}</div>
      </div>
    </div>
  );
};

export default Contact;
