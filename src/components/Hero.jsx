"use client";

import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-screen 
                    flex items-center justify-center text-center
                    pt-4">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero.webp')" }}
            />

            {/* Softer Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6 text-white mt-18 ">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl leading-tight font-light"
                >
                    Find Your
                    Perfect Dream <br />
                    Destination
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-200"
                >
                    Discover breathtaking places, unforgettable journeys and adventures
                    that stay with you forever — travel more, worry less. From peaceful beaches
                    and scenic mountains to vibrant cities and hidden gems, every trip is crafted
                    to match your style and comfort. Let every destination become a story, every
                    journey a memory, and every moment an experience worth reliving with GeoHolidays.
                </motion.p>


                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-6 justify-center mb-8"
                >

                    {/* Contact Button */}
                    <Link
                        href="#contact"
                        className="group relative overflow-hidden
                       border border-white/40
                       px-7 py-3 rounded-md
                       font-semibold backdrop-blur
                       transition"
                    >
                        <span className="absolute inset-0 bg-[#0b1f3a] 
                             translate-x-[-100%] 
                             group-hover:translate-x-0 
                             transition-transform duration-300" />

                        <span className="relative flex items-center gap-2 text-white group-hover:text-white">
                            <HiOutlineMail size={20} />
                            Start Your Journey
                        </span>
                    </Link>

                    {/* Playstore Button */}
                    <a
                        href="#"
                        className="group relative overflow-hidden
                       border border-white/40
                       px-6 py-3 rounded-md
                       font-semibold backdrop-blur
                       transition"
                    >
                        <span className="absolute inset-0 bg-[#0b1f3a]
                             translate-x-[-100%]
                             group-hover:translate-x-0
                             transition-transform duration-300" />

                        <span className="relative flex items-center gap-3 text-white">
                            <FaGooglePlay size={18} />
                            Get it on Google Play
                        </span>
                    </a>

                </motion.div>

            </div>
        </section>
    );
}
