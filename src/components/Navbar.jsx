import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="mb-20 flex items-center
    justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center"></div>
      <div
        className="m-8 flex items-center justtify-center
      gap-4 text-2xl"
      >
        <a href="https://www.linkedin.com/in/saad-ahmad-malik-042140192/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/saada865">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
