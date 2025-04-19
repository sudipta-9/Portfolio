import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6gyk3t9",
        "template_f4ltjwg",
        form.current,
        "_AlX1fKwrFRhPKjGh"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 sm:px-10 md:px-20 lg:px-40"
      style={{
        background: "radial-gradient(ellipse at center, #000000 0%, #002244 100%)",
        boxShadow: "inset 0 0 100px #00f0ff40",
      }}
    >
      <ToastContainer />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff914d] drop-shadow-[0_0_15px_#ff914d]">
          <span className="text-white">Get in</span> Touch
        </h2>

        {/* Animated Underline */}
        <motion.div
          className="w-32 h-1 rounded-full bg-[#309fe9] mx-auto mt-3 shadow-[0_0_10px_#00bfff]"
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <p className="text-orange-200 mt-4 text-lg font-medium">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-md bg-[#0a0a0a] p-6 rounded-2xl shadow-[0_0_30px_#ff914d] border border-[#ff914d]"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-[#ff914d] text-center drop-shadow-[0_0_10px_#ff914d]">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-black text-orange-200 border border-[#ff914d] focus:outline-none focus:ring-2 focus:ring-[#ff914d] shadow-inner shadow-[#ff914d]/40 placeholder-orange-300"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-black text-orange-200 border border-[#ff914d] focus:outline-none focus:ring-2 focus:ring-[#ff914d] shadow-inner shadow-[#ff914d]/40 placeholder-orange-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-black text-orange-200 border border-[#ff914d] focus:outline-none focus:ring-2 focus:ring-[#ff914d] shadow-inner shadow-[#ff914d]/40 placeholder-orange-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-black text-orange-200 border border-[#ff914d] focus:outline-none focus:ring-2 focus:ring-[#ff914d] shadow-inner shadow-[#ff914d]/40 placeholder-orange-300"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#ff914d] to-[#ffb84d] py-3 text-black font-bold rounded-md shadow-[0_0_15px_#ff914d] hover:shadow-[0_0_30px_#ff914d] transition"
          >
            Send ✉️
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
