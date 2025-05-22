import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import img from "../attachments/colorfitMainNOBG.png";
import heroimg1 from "../attachments/hero1.avif";

export default function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Remove the hash from the URL
            if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname);
                // Scroll to top after hash is removed
                window.scrollTo({ top: 0, behavior: "auto" });
            }
        }, 10); // Short delay (10-50ms) lets browser finish default anchor scroll
    
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-white">
            {/* Navigation Bar */}
            <Navbar />

            {/* Home Section */}
            <motion.section
                id="home"
                className="relative h-[100vh] w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Background Image */}
                <img
                    src={heroimg1}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30" />

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 max-w-4xl">
                    <p className="uppercase text-sm tracking-wider text-white mb-2">Designing Outfits</p>
                    <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-4">
                        Your New <br /> Everyday Style.
                    </h1>
                    <p className="text-white text-lg max-w-md mb-6">
                        ColorFit is your destination for designer and comfortable clothes for any occasion.
                    </p>
                    <div className="flex gap-4">
                        <button onClick={() => navigate("/main")} className="bg-white text-black px-6 py-3 rounded-md shadow hover:bg-transparent hover:text-white hover:border hover:border-white hover:scale-105 transition transform duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Hero Section */}
            <section id="hero" className="pt-20 md:pt-28 px-6 bg-gradient-to-b from-blue-50 to-white">
                <motion.div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left side: text content */}
                    <div className="text-center md:text-left md:w-3/5">
                        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                            Find the Perfect Color Match
                        </h1>
                        <p className="text-md md:text-lg text-gray-700 mb-6">
                            Effortlessly find matching colors for your outfits with our easy-to-use ColorFit app.
                            Mix and match outfits based on color harmony. See live previews, color suggestions, and outfit recommendations tailored to your preferences.
                        </p>
                        <button onClick={() => navigate("/main")} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition transform duration-200">
                            Try ColorFit
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
            <section id="about" className="py-14 md:py-20 px-6 bg-gradient-to-b from-white to-blue-50 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-medium mb-4">About the App</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        ColorFit is your digital stylist. Choose a top and bottom color, and instantly view stylish combinations. Whether you're dressing for work, a date, or a casual day out, ColorFit ensures you always look your best.
                    </p>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-14 md:py-20 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-medium mb-4">Get in Touch</h2>
                    <p className="text-gray-700 max-w-xl mx-auto mb-6">
                        Have questions or feedback? Reach out to us. We'd love to hear from you!
                    </p>
                    <a
                        href="mailto:us.earnm98@gmail.com"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </section>
        </div>
    );
}