import React from "react";
import { motion } from "framer-motion";

import htmlLogo from "../../assets/tech_logo/html.png";
import cssLogo from "../../assets/tech_logo/css.png";
import sassLogo from "../../assets/tech_logo/sass.png";
import materialuilogo from "../../assets/tech_logo/materialui.png";
import javascriptLogo from "../../assets/tech_logo/javascript.png";
import reactjsLogo from "../../assets/tech_logo/reactjs.png";
import tailwindcssLogo from "../../assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "../../assets/tech_logo/bootstrap.png";
import nodejsLogo from "../../assets/tech_logo/nodejs.png";
import expressjsLogo from "../../assets/tech_logo/express.png";
import mysqlLogo from "../../assets/tech_logo/mysql.png";
import mongodbLogo from "../../assets/tech_logo/mongodb.png";
import pythonLogo from "../../assets/tech_logo/python.png";
import gitLogo from "../../assets/tech_logo/git.png";
import githubLogo from "../../assets/tech_logo/github.png";
import vscodeLogo from "../../assets/tech_logo/vscode.png";
import postmanLogo from "../../assets/tech_logo/postman.png";
import postgreLogo from "../../assets/tech_logo/postgre.png";
import numpylogo from "../../assets/tech_logo/numpy.png";
import pandaslogo from "../../assets/tech_logo/pandas.png";
import matplotliblogo from "../../assets/tech_logo/matplotlib.png";
import seabornlogo from "../../assets/tech_logo/seaborn.png";
import excellogo from "../../assets/tech_logo/excel.png";
import powerbilogo from "../../assets/tech_logo/powerbi.png";

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuilogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "NumPy", logo: numpylogo },
      { name: "Pandas", logo: pandaslogo },
      { name: "Matplotlib", logo: matplotliblogo },
      { name: "Seaborn", logo: seabornlogo },
      { name: "Excel", logo: excellogo },
      { name: "Power BI", logo: powerbilogo },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full px-4 md:px-[8vw] py-20 flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #002244 100%)",
        boxShadow: "inset 0 0 100px #007BFF",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#ff914d] drop-shadow-[0_0_15px_#ff914d]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">My</span> Skills
        </motion.h2>

        {/* Animated Underline */}
        <motion.div
          className="w-32 h-1 rounded-full bg-[#309fe9] mx-auto mt-3 shadow-[0_0_10px_#00bfff]"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      {/* Skills Grid */}
      <div className="w-full space-y-16">
        {SkillsInfo.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 text-[#ffc857] drop-shadow-[0_0_10px_#ffc857] text-center md:text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/5 border border-[#ff914d]/20 backdrop-blur-lg rounded-2xl p-5 
                             shadow-[0_0_25px_#ff914d] hover:shadow-[0_0_50px_#ff914d] 
                             transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-3 object-contain rounded"
                  />
                  <p className="text-sm font-medium text-white text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
