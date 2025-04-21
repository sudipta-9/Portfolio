import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../photo/photo.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 md:px-[10vw] py-20"
      style={{
        background: "linear-gradient(135deg, #000428 0%, #004e92 100%)",
        boxShadow: "0 0 60px #00f7ff",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-[0_0_25px_#00f7ff] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_50px_#00f7ff]"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-xl md:text-2xl text-[#00ff00] font-semibold">
            Hi! I am
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3ac935] drop-shadow-[0_0_10px_#16f0ff]">
            Sudipta Kumar Das
          </h1>

          <div className="flex justify-center md:justify-start items-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#f05151] leading-tight">
            <span className="mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "Full Stack Developer",
                1500,
                "Data Analytics",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-[#f0a056] font-medium drop-shadow-[0_0_10px_#35f3ff]"
            />
          </div>

          <p className="mt-6 text-base md:text-lg text-[#d1eaff]">
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
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#0d0e0e] to-[#ec0d0d] text-white font-bold rounded-xl 
                       shadow-[0_0_25px_#00f7ff] hover:shadow-[0_0_50px_#00f7ff] transform hover:scale-105 
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
