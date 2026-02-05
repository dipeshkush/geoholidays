"use client";

import { FiShield } from "react-icons/fi";
import { LuMap } from "react-icons/lu";
import { HiOutlineClock } from "react-icons/hi2";
import { RiUserHeartLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function WhyTravelSection() {
    const items = [
        {
            icon: FiShield,
            title: "Trusted Expertise",
            text: "With years of industry experience, our travel experts ensure every trip is smooth, safe, and memorable.",
        },
        {
            icon: LuMap,
            title: "Tailored Itineraries",
            text: "We craft travel plans based on your interests, preferences, and travel goals — nothing generic, just personal.",
        },
        {
            icon: HiOutlineClock,
            title: "On-Time Coordination",
            text: "Every flight, hotel, and activity is scheduled with precision, ensuring timely experiences and zero hassle.",
        },
        {
            icon: RiUserHeartLine,
            title: "Customer-Centric Service",
            text: "We prioritize your comfort, safety, and satisfaction at every step of your journey.",
        },
    ];

    return (
        <section id="travel" className="py-12 bg-[#0b0f19] text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-5xl font-light text-gray-100">
                        Why Choose <span className="text-[#ff7a00] font-medium font-semibold">GeoHolidays</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        We turn your travel dreams into real-world adventures with expertly
                        planned itineraries and personalized experiences for individuals,
                        families, and corporate groups.
                    </p>
                </motion.div>

                {/* Feature Rows */}
                <div className="mt-16 space-y-10">

                    {items.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="group grid md:grid-cols-3 gap-8 relative pl-6"
                            >

                                {/* right accent rail */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] 
                                bg-white/10 group-hover:bg-[#ff7a00]
                                transition" />

                                {/* Left block */}
                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 rounded-xl 
                                  bg-white/5 border border-white/10
                                  flex items-center justify-center
                                  group-hover:bg-[#ff7a00]/20
                                  group-hover:border-[#ff7a00]
                                  transition">

                                        <Icon size={22} className="text-[#ff7a00]" />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Right text */}
                                <div className="md:col-span-2 text-gray-300 text-lg leading-relaxed">
                                    {item.text}

                                    <div className="mt-4 h-[2px] w-0 bg-[#ff7a00] 
                                  group-hover:w-40 transition-all duration-300" />
                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
