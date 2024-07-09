import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <div ref={ref} className="f-center lg:h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="container text-center"
      >
        <p>Get in Touch</p>
        <h2 className="mb-8">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-around c-border p-5 md:max-w-[80%] lg:max-w-[60%] mx-auto"
        >
          <motion.a
            href="mailto:alauddinroky4@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="f-center gap-2 hover:text-gray cursor-pointer"
          >
            <FaEnvelope style={{ fontSize: "1.5rem" }} />{" "}
            alauddinroky4@gmail.com
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohammed-alauddin-pro/"
            whileHover={{ scale: 1.1 }}
            className="f-center gap-2 hover:text-gray cursor-pointer"
          >
            <FaLinkedin style={{ fontSize: "1.5rem" }} /> Linkedin
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="footer py-10 space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center sm:flex-row gap-5 sm:gap-9 text-center text-2xl"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#about"
              className="hover-border"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#experiences"
              className="hover-border"
            >
              Experience
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#projects"
              className="hover-border"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="hover-border"
            >
              Contact
            </motion.a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Copyright © 2023 Mohammed Alauddin. All Rights Reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
