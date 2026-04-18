import React from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-12 py-4 bg-white">

            {/* LEFT → Logo */}
            <img src={logo} alt="logo" className="w-[141px] h-[70px]" />

            {/* RIGHT STACK  */}
            <div className="flex flex-col items-center gap-2">

                {/* Icons ABOVE */}
                <div className="flex gap-7 ml-auto">
                    <img src={linkedin} alt="linkedin" className="w-6 h-6 cursor-pointer" />
                    <img src={youtube} alt="youtube" className="w-6 h-6 cursor-pointer" />
                    <img src={instagram} alt="instagram" className="w-6 h-6 cursor-pointer" />
                    <img src={facebook} alt="facebook" className="w-6 h-6 mr-3 cursor-pointer" />
                </div>

                <div className="flex justify-center">

                    <div className="flex items-center gap-12 text-gray-800 font-medium">

                        <span className="cursor-pointer">Home</span>
                        <span className="cursor-pointer">About us</span>
                        <span className="cursor-pointer">News</span>
                        <span className="cursor-pointer">Donation</span>

                        <button className="bg-blue-500 text-white px-5 py-2 rounded-[15px] whitespace-nowrap">
                            Contact Us
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar;