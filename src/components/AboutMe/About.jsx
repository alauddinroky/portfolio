import React, { useRef } from "react";
import about from "../../assets/about-pic.png";
import { motion, useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import { FaGraduationCap } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  return (
    <motion.div
      ref={ref}
      style={{
        backgroundColor: inView ? "#ffc" : "#fff",
        transition: "all 3s ease",
      }}
      className="mx-auto py-10 xl:py-0 xl:h-[100vh] flex items-center"
      id="about"
    >
      <div className="text-center container">
        <p>Get to know more</p>
        <h2 className="mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="right flex-1 max-w-[60%] lg:max-w-[40%] overflow-hidden">
            <img className="rounded-2xl" src={about} alt="" />
          </div>
          <div className="right flex-1">
            <div className="top grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 rounded-3xl text-base text-gray mb-6">
              <div className="text-center c-border p-7 col-center">
                <span>
                  <FaGraduationCap
                    style={{ fontSize: "3rem", textAlign: "center" }}
                  />
                </span>
                <h4 className="font-bold">Experience </h4>
                <span>3+ years </span>
                <span>Frontend Development</span>
              </div>
              <div className="c-border p-7 col-center">
                <span>
                  <IoIosRibbon style={{ fontSize: "3rem" }} />
                </span>
                <h4 className="font-bold">Education </h4>
                <span>BA Bachelors Degree </span>
                <span>MA Masters Degree</span>
              </div>
            </div>
            <div className="bottom">
              <p className="text-left">
                I am a passionate front-end developer with three years of
                experience, specializing in creating clean and intuitive user
                interfaces. Through freelance projects, I have cultivated strong
                skills in HTML, CSS, JavaScript, and frameworks like React . I
                thrive on solving challenges and am committed to delivering
                high-quality solutions that enhance user experiences. With a
                collaborative approach and a drive for continuous learning, I
                aim to contribute effectively to innovative web development
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
