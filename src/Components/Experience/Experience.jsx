import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Tutor",
    description:
      "An adaptive learning platform offering real-time assistance, progress tracking, and personalized learning paths.",
    skills: ["React", "Node.js", "OpenVINO", "Tailwind CSS"],
    codeLink: "https://github.com/sudipta-9/ai-tutor",
  },
  {
    title: "Smart Education System",
    description:
      "MERN stack-based system for managing students, classes, results, and study materials.",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    codeLink: "https://github.com/sudipta-9/smart-edu",
  },
  {
    title: "Bug Detection AI",
    description:
      "ML project that detects and auto-fixes code bugs using trained models and static analysis.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Docker"],
    codeLink: "https://github.com/sudipta-9/bug-ai",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-black to-[#116ac4] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#f1a22c] drop-shadow-[0_0_15px_#00ffff]">
          Experience
        </h2>
        <div className="w-24 h-1 bg-[#00ffff] mx-auto mt-3 shadow-[0_0_8px_#00ffff]" />
        <p className="text-blue-200 mt-4 text-lg max-w-2xl mx-auto">
          Dive into the projects I've worked on and the technologies behind them.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#f39b35] shadow-[0_0_25px_#00ffff] backdrop-blur-sm transform transition duration-500 hover:shadow-[0_0_40px_#00ffff]"
          >
            <h3 className="text-2xl font-semibold text-[#eca02e] mb-2">
              {project.title}
            </h3>
            <p className="text-blue-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-black border border-[#e6622e] text-[#2ce478] rounded-full text-sm shadow-[0_0_5px_#00ffff]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ffff] text-black font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition"
            >
              <FaCode /> View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
