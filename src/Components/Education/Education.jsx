import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Tilt from "react-parallax-tilt";

import logo10 from "../../assets/education_logo/snh.jpg";
import logo12 from "../../assets/education_logo/kkh.jpg";
import brainware from "../../assets/education_logo/bwu.jpg";

const educationData = [
  {
    title: "Class 10",
    institution: "Siksha Niketan High School",
    result: "79.74%",
    year: "2020",
    logo: logo10,
  },
  {
    title: "Class 12",
    institution: "Dum Dum Krishna Kumar Hindu Academy School",
    result: "80.2%",
    year: "2022",
    logo: logo12,
  },
  {
    title: "B.Tech in CSE (AIML)",
    institution: "Brainware University",
    result: "78.71%",
    year: "2022 - 2026",
    logo: brainware,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen w-full px-6 md:px-[10vw] py-20 bg-[#0f0f0f] flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #00ffa340 0%, #000000 100%)",
        boxShadow: "inset 0 0 80px #00ff95",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center drop-shadow-[0_0_10px_#00ffcc]">
        <span className="text-white">My</span> Education
      </h2>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent z-0" />

        <div className="flex flex-col gap-16 relative z-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center gap-6`}
            >
              {/* Connector Dot */}
              <div className="w-1/2 flex justify-center">
                <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#0f0f0f] z-10" />
              </div>

              {/* Card */}
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={700}
                gyroscope={true}
                className="w-full max-w-md"
              >
                <div
                  className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6 
                            shadow-[0_0_25px_#00ff95] hover:shadow-[0_0_50px_#00ff95] 
                            transform transition-all duration-500 text-white"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-indigo-300">
                      {edu.title}
                    </h3>
                    <GraduationCap className="text-cyan-400 w-6 h-6" />
                  </div>

                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="h-16 md:h-20 object-contain rounded-lg shadow-md"
                    />
                  </div>

                  <p className="text-base md:text-lg font-semibold text-blue-300 text-center">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-gray-300 text-center">
                    Percentage :{" "}
                    <span className="text-green-400 font-semibold">
                      {edu.result}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-400 italic text-center">
                    Year: {edu.year}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
