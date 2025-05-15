import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img from "../mainLogoCF.png"

export default function Navbar() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
            <div className="w-full px-4 md:px-6 lg:px-12 py-4 flex justify-between items-center">
                <button onClick={() => navigate("/")}><img src={img} alt="ColorFit Logo" className="h-8 md:h-10 w-auto"/></button>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <a href="#home" className="block py-2">Home</a>
                    <a href="#about" className="block py-2">About</a>
                    <a href="#contact" className="block py-2">Contact</a>
                </div>
            )}
        </nav>
    )
}
