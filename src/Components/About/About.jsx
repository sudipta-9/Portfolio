import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../photo/photo.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-[10vw] py-20"
      style={{
        background: "linear-gradient(135deg, #00ffa365 0%, #000000 100%)",
        boxShadow: "0 0 60px #00ff95",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-[0_0_25px_#00ff95] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_50px_#00ff95]"
          />
        </div>

        <div className="text-white w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-xl md:text-2xl text-blue-400 font-semibold">
            Hi! I am
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">
            Sudipta Kumar Das
          </h1>

          <div className="flex justify-center md:justify-start items-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
            <span className="mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "Full Stack Developer",
                1500,
                "Data Analyst",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-blue-400 font-medium"
            />
          </div>

          <p className="mt-6 text-base md:text-lg text-gray-300">
            I am a passionate Full Stack Developer with a knack for building
            seamless, scalable web applications. With hands-on experience in
            both frontend and backend technologies, I love turning ideas into
            functional digital products. I also specialize in Data Analytics,
            leveraging data to make smarter decisions and drive innovation.
          </p>

          <a
            href="https://drive.google.com/file/d/1JKVAGMafPZlRlE2Y72lv9aUhS6wnS11w/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl 
                       shadow-[0_0_25px_#00ff95] hover:shadow-[0_0_50px_#00ff95] transform hover:scale-105 
                       transition duration-300 ease-in-out animate-pulse"
          >
            🚀 Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
