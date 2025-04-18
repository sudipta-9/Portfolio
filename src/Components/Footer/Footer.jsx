import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-black text-white px-6 py-12 relative z-10"
      style={{
        background: "linear-gradient(145deg, #000000, #001d13)",
        boxShadow: "inset 0 0 60px #00ff95",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-green transition-transform duration-300 transform hover:-translate-y-2 hover:scale-125 drop-shadow-[0_0_8px_#00ff95]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-green transition-transform duration-300 transform hover:-translate-y-2 hover:scale-125 drop-shadow-[0_0_8px_#00ff95]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-green transition-transform duration-300 transform hover:-translate-y-2 hover:scale-125 drop-shadow-[0_0_8px_#00ff95]"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white text-center drop-shadow-[0_0_6px_#00ff95]">
          © {new Date().getFullYear()} <span className="text-neon-green">YourName</span>. All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="relative bg-neon-green text-white font-bold px-6 py-3 rounded-full overflow-hidden group shadow-lg transform hover:scale-110 transition duration-300"
        >
          <span className="absolute inset-0 bg-neon-green blur-xl opacity-70 animate-pulse rounded-full"></span>
          <span className="relative z-10 flex items-center gap-2">
            <FaArrowUp className="animate-bounce" />
            Top
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
