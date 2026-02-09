"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection({ showHeader = true }) {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@geoholidays.in", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Thank you! Your message has been sent successfully.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl font-light text-gray-900">
            Let's Start Your{" "}
            <span className="text-blue-900 font-semibold">
              Journey
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your next unforgettable journey with GeoHolidays?
            Have questions or want to customize your trip?
            We're here to help — reach out today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* LEFT - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-10">
                {/* Phone, Email */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b1f3a]/10 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-[#0b1f3a] text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <a
                        href="tel:+917880170012"
                        className="text-gray-700 hover:text-[#0b1f3a] transition-colors"
                      >
                        +91 78801 70012
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b1f3a]/10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-[#0b1f3a] text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <a
                        href="mailto:info@geoholidays.in"
                        className="text-gray-700 hover:text-[#0b1f3a] transition-colors"
                      >
                        info@geoholidays.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address + Office Timings */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b1f3a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-[#0b1f3a] text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium mb-1">Office Address:</p>
                      <p className="text-gray-600 leading-relaxed">
                        Office No 34, Maple High Street,<br />
                        Narmadapuram Rd, in front of Aashima Mall,<br />
                        Danish Nagar, Bagmugaliya,<br />
                        Bhopal, Madhya Pradesh 462042
                      </p>
                    </div>
                  </div>

                  {/* Office Timings */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b1f3a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="text-[#0b1f3a] text-xl"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium mb-1">Office Hours:</p>
                      <p className="text-gray-600 leading-relaxed">
                        Monday – Saturday: <span className="font-medium">10:00 AM – 6:00 PM</span><br />
                        Sunday: <span className="font-medium">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="New Contact — GeoHolidays Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    name="First Name"
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    name="Last Name"
                    required
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  name="Phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="Message"
                  rows={2}
                  required
                  placeholder="Type your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b1f3a] focus:ring-2 focus:ring-[#0b1f3a]/20 outline-none transition-all resize-y min-h-[60px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className={`
                  w-full py-4 px-8 rounded-lg font-medium text-white transition-all duration-300
                  ${status === "Sending..."
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#0b1f3a] hover:bg-[#0a1729] shadow-md hover:shadow-lg"
                  }
                `}
              >
                {status === "Sending..." ? "Sending..." : "Submit"}
              </button>

              {status && status !== "Sending..." && (
                <p
                  className={`text-center font-medium mt-4 ${status.includes("Thank you") ? "text-green-600" : "text-red-600"
                    }`}
                >
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