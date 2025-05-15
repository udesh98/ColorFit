import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../colorfitMainNOBG.png";
import Navbar from "./Navbar";

export default function LandingPage() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navigation Bar */}
      <Navbar/>

      {/* Home Section */}
      <section id="home" className="pt-20 md:pt-28 px-6 bg-gradient-to-b from-blue-100 to-white">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side: text content */}
          <div className="text-center md:text-left md:w-3/5">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find the Perfect Color Match
            </h1>
            <p className="text-md md:text-lg text-gray-700 mb-6">
              Effortlessly find matching colors for your outfits with our easy-to-use ColorFit app.
              Mix and match outfits based on color harmony. See live previews, color suggestions, and outfit recommendations tailored to your preferences.
            </p>
            <button onClick={() => navigate("/main")} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition transform duration-300">
              Get Started
            </button>
          </div>

          {/* Right side: image */}
          <div className="md:w-2/5 flex justify-center">
            <img
              src={img}
              alt="Outfit Preview"
              className="w-full max-w-md object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 md:py-20 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About the App</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            ColorFit is your digital stylist. Choose a top and bottom color, and instantly view stylish combinations. Whether you're dressing for work, a date, or a casual day out, ColorFit ensures you always look your best.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 md:py-20 px-6 bg-blue-50 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Have questions or feedback? Reach out to us. We'd love to hear from you!
          </p>
          <a
            href="mailto:hello@colorfit.app"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}