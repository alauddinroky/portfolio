import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profile from "../../assets/profile-pic.png";
import resume from "../../assets/alauddin-resume.pdf";
import { FaLinkedin, FaGithub, FaArrowCircleUp } from "react-icons/fa";
// import { FaArrowAltCircleUp } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="mx-auto">
      {/* Main container with animations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-4xl md:h-[85vh] py-10 mx-auto container"
      >
        {/* Image section with tilt effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="image flex-1 max-w-[500px] md:max-w-[100%]"
        >
          <Tilt>
            <img src={profile} alt="Profile" />
          </Tilt>
        </motion.div>

        {/* Content section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="content flex flex-col items-center flex-1"
        >
          <span>Hello, I'm</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-bold"
          >
            Md Alauddin
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mb-3"
          >
            Front-End Developer
          </motion.h3>

          {/* Button section for CV download and contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 mb-4"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-primary"
              href={resume}
              download="resume-alauddin.pdf"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-primary bg-gray text-white hover:bg-deepGray hover:border-none"
            >
              Contact Info
            </motion.button>
          </motion.div>

          {/* Social media links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex gap-5"
          >
            <a className="text-lg" href="https://github.com/alauddinroky">
              <FaGithub style={{ fontSize: "2rem" }} />
            </a>
            <a
              className="text-lg"
              href="https://www.linkedin.com/in/mohammed-alauddin-pro/"
            >
              <FaLinkedin style={{ fontSize: "2rem" }} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <a
        href="#navbar"
        className="fixed bottom-10 right-5 animate-pulse text-3xl"
      >
        <FaArrowCircleUp />
      </a>
    </div>
  );
}

export default HeroSection;
