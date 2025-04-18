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
      className="min-h-screen w-full px-4 md:px-[8vw] py-20 bg-[#0f0f0f] flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #00ffa320 0%, #000000 100%)",
        boxShadow: "inset 0 0 80px #00ff95",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center drop-shadow-[0_0_10px_#00ffcc]">
        <span className="text-white">My</span> Skills
      </h2>

      <div className="w-full space-y-16">
        {SkillsInfo.map((category, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 text-white drop-shadow-[0_0_6px_#00ffc8] text-center md:text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#151515] p-5 rounded-2xl shadow-[0_0_20px_#00ffb3] border border-[#00ff95] hover:shadow-[0_0_30px_#00ff95] transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-3 object-contain"
                  />
                  <p className="text-sm text-white text-center">{skill.name}</p>
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
