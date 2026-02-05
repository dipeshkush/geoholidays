"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        setTimeout(() => {
            setStatus("Message sent successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        }, 1500);
    };

    return (
        <section className="bg-[#f5f5f7] py-12 scroll-mt-32" id="contact">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-light text-gray-700 mt-6">
                        Get in Touch with <span className="text-[#ff7a00] font-medium font-semibold">GeoHolidays</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to embark on your GeoHolidays luxury travel experience? Contact us today and let us create unforgettable memories for you.

                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14">

                    {/* LEFT — Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-serif text-gray-900 mb-8">
                            Contact Information
                        </h3>

                        <div className="space-y-6">

                            {/* Phone */}
                            <div className="flex items-center gap-5 border border-gray-200 bg-white p-6 rounded-md">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FaPhoneAlt className="text-gray-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Phone</p>
                                    <p className="text-gray-600 mt-1">+91 78801 70012</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-5 border border-gray-200 bg-white p-6 rounded-md">
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FaEnvelope className="text-gray-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-gray-600 mt-1">info@geoholidays.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 border border-gray-200 bg-white p-6 rounded-md">

                                {/* Icon */}
                                <div className="w-14 h-14 min-w-[56px] rounded-full bg-gray-100 
                                                flex items-center justify-center 
                                                flex-shrink-0 self-start">
                                    <FaMapMarkerAlt className="text-gray-700" />
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="font-medium text-gray-900">Location</p>
                                    <p className="text-gray-600 mt-1 leading-relaxed">
                                        Office No 34, Maple High Street,<br />
                                        Narmadapuram Rd, in front of Aashima Mall,<br />
                                        Danish Nagar, Bagmugaliya, Bhopal,<br />
                                        Madhya Pradesh 462042
                                    </p>
                                </div>

                            </div>


                        </div>
                    </motion.div>

                    {/* RIGHT — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-xl p-10"
                    >
                        <h3 className="text-3xl font-serif text-gray-900 mb-8">
                            Send us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your First Name"
                                    className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Last Name"
                                    className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                            />

                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                            />

                            <textarea
                                name="message"
                                rows={2}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                            />

                            <button className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-md font-medium transition">
                                {status || "Send Message"}
                            </button>

                            {status && (
                                <p className="text-center text-green-600 font-medium">
                                    {status}
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
