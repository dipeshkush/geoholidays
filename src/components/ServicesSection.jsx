"use client";

import { FaPlane, FaTrain, FaBus, FaCar } from "react-icons/fa";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function ServicesSection() {
    const services = [
        {
            icon: FaPlane,
            title: "Flight Solutions",
            desc: "Premium air travel arrangements with corporate & group expertise",
            points: [
                "End-to-end journey planning",
                "Group & incentive travel",
                "VIP & cabin class optimization",
            ],
            color: "from-blue-200 to-indigo-400",
        },
        {
            icon: FaTrain,
            title: "Rail Journeys",
            desc: "Luxury trains, bullet trains & long-distance rail expertly curated",
            points: [
                "Premium cabin selection",
                "Multi-city rail itineraries",
                "Scenic & heritage routes",
            ],
            color: "from-emerald-200 to-teal-400",
        },
        {
            icon: FaBus,
            title: "Coach & Tours",
            desc: "Tailor-made escorted tours and comfortable coach travel",
            points: [
                "Curated group departures",
                "Thematic & seasonal tours",
                "Private & boutique journeys",
            ],
            color: "from-amber-200 to-orange-400",
        },
        {
            icon: FaCar,
            title: "Ground Transport",
            desc: "Seamless transfers, chauffeurs and premium vehicle fleet",
            points: [
                "Executive & luxury transfers",
                "Airport & station meets",
                "City tours & multi-day drives",
            ],
            color: "from-violet-200 to-purple-400",
        },
        {
            icon: HiOutlineDocumentCheck,
            title: "Visa & Documentation",
            desc: "Expert visa facilitation and documentation support worldwide",
            points: [
                "Tourist, business & transit visas",
                "Application filing & tracking",
                "Document preparation guidance",
            ],
            color: "from-rose-200 to-pink-400",
        },
        {
            icon: RiCustomerService2Line,
            title: "24×7 Concierge",
            desc: "Round-the-clock travel support when it matters most",
            points: [
                "Real-time assistance worldwide",
                "Emergency travel intervention",
                "Multilingual support team",
            ],
            color: "from-cyan-200 to-teal-400",
        },
    ];

    return (
        <section id="services" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-5xl font-light text-gray-900 mt-6">
                     Our <span className="text-blue-900 font-semibold"> Services</span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                        From air tickets to visas, luxury transfers to curated experiences — we manage every detail so your journey is seamless and memorable.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16  grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                variants={cardVariants}
                                className="group relative bg-white rounded-xl p-8 md:p-9 border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-400 ease-out overflow-hidden"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`}
                                />

                                <div
                                    className={`absolute left-0 top-0 h-full w-1.5 bg-gray-500 group-hover:bg-gradient-to-b ${service.color} group-hover:w-2 transition-all duration-500`}
                                />

                                <div
                                    className={`relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:shadow-2xl
                    grayscale group-hover:grayscale-0 brightness-95 group-hover:brightness-100`}
                                >
                                    <Icon size={26} className="text-white drop-shadow-md" />
                                </div>

                                <h3 className="mt-7 text-2xl font-semibold text-gray-900 text-center">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-gray-600 text-center leading-relaxed min-h-[3.2rem]">
                                    {service.desc}
                                </p>

                                <ul className="mt-7 space-y-2.5 text-gray-700 text-sm md:text-base">
                                    {service.points.map((point) => (
                                        <li key={point} className="flex items-center gap-2.5">
                                            <span className="text-gray-400 text-lg">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 h-0.5 w-12 bg-gray-300 mx-auto rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}