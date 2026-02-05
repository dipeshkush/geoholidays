"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStorySection() {
    return (
        <section id="about" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl font-light text-gray-900 mt-6"
                    >
                        Our <span className="text-blue-900 font-medium font-semibold">Story</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="mt-8 space-y-6 text-gray-700 text-lg leading-relaxed"
                    >

                        <p>
                            GeoHolidays was built on a simple belief — travel should be
                            more than just movement; it should be meaningful. We curate
                            thoughtfully designed journeys for travelers, families, and
                            organizations who expect comfort, precision, and memorable
                            experiences in every trip.
                        </p>

                        <p>
                            From corporate MICE programs to luxury leisure travel, we create
                            customized itineraries that are shaped around your schedule —
                            not forced into fixed templates. Every destination, stay, and
                            activity is selected for quality, safety, and experience value.
                        </p>

                        <p>
                            Over the years, GeoHolidays has grown into a trusted travel
                            partner, serving thousands of happy travelers across hundreds of
                            destinations worldwide. From your first enquiry to your final
                            return, our team ensures every journey runs smoothly.
                        </p>

                    </motion.div>

                    {/* MICE + STATS STRIP */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-6"
                    >

                        <p className="text-sm tracking-wide uppercase text-[#c7a16b] font-semibold">
                            Strategic Experience for MICE Travel
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                            {[
                                ["10+", "Years Experience"],
                                ["80,000+", "Happy Travelers"],
                                ["500+", "Iconic Destinations"],
                            ].map(([num, label], i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15 * i }}
                                    className="text-center sm:text-left"
                                >
                                    <p className="text-3xl sm:text-4xl font-light text-[#0b1f3a]">
                                        {num}
                                    </p>
                                    <p className="mt-2 text-gray-600">
                                        {label}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="relative mt-16"
                >
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="/about1.webp"
                            alt="Travel Marina"
                            width={500}
                            height={700}
                            className="object-top w-full h-[260px] sm:h-[360px] md:h-[500px]"
                        />
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
