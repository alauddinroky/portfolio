import React from "react";
import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";

function Card({ dev, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 c-border p-6"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl font-semibold text-black mb-10"
      >
        {dev}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-2 gap-8"
      >
        {data.map((skill) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="skills"
            key={skill.name}
          >
            <HiCheckBadge
              style={{
                minWidth: "20%",
              }}
            />
            <div className="skill">
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Card;
