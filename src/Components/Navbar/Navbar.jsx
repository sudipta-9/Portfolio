import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }, // Contact Section
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-[10vw] py-3 ${
        isScrolled
          ? "bg-[#0f0f0f] bg-opacity-90 backdrop-blur-md shadow-[0_0_25px_#00ff95]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00ffa3]">&lt;</span>
          <span className="text-white">Sudipta Kumar</span>
          <span className="text-[#00ff95]">Das</span>
          <span className="text-[#00ffa3]">&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium text-white">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`relative pb-1 transition-all duration-200 font-semibold ${
                    activeSection === item.id
                      ? "text-[#00ff95]"
                      : "hover:text-[#00ffa3]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-full transition-transform duration-300 transform ${
                      activeSection === item.id
                        ? "scale-x-100 bg-[#00ff95]"
                        : "scale-x-0 bg-[#00ffa3]"
                    } origin-left`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 ml-6">
            <a
              href="https://github.com/sudipta-9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ffa3] transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudipta-kumar-das-672743276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00ffa3] transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#00ffa3] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#00ffa3] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-4/5 bg-[#050414] bg-opacity-70 backdrop-blur-lg z-50 rounded-xl shadow-[0_0_25px_#00ff95] md:hidden"
        >
          <ul className="flex flex-col items-center space-y-5 py-6 text-white font-medium text-lg">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-[#00ff95]"
                      : "hover:text-[#00ffa3]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-5 pt-2">
              <a
                href="https://github.com/sudipta-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00ffa3]"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudipta-kumar-das-672743276/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00ffa3]"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;