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
      const res = await fetch(
        "https://formsubmit.co/ajax/info@geoholidays.in",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message");
      }
    } catch (err) {
      setStatus("Failed to send message");
    }
  };

  return (
    <section className="bg-[#f5f5f7] py-12 scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mt-6">
            Get in Touch with{" "}
            <span className="text-[#ff7a00] font-semibold">
              GeoHolidays
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to embark on your GeoHolidays luxury travel experience?
            Contact us today and let us create unforgettable memories for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
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
                  <p className="text-gray-600 mt-1">
                    +91 78801 70012
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 border border-gray-200 bg-white p-6 rounded-md">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <FaEnvelope className="text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600 mt-1">
                    info@geoholidays.in
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 border border-gray-200 bg-white p-6 rounded-md">
                <div className="w-14 h-14 min-w-[56px] rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-700" />
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Location
                  </p>
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
            transition={{ duration: 0.9 }}
            className="bg-white border border-gray-200 rounded-xl p-10"
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* hidden config */}
              <input type="hidden" name="_subject" value="New Contact — GeoHolidays Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="First Name"
                  required
                  placeholder="Your First Name"
                  className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  name="Last Name"
                  required
                  placeholder="Your Last Name"
                  className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <input
                type="email"
                name="Email"
                required
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
              />

              <input
                name="Phone"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400"
              />

              <textarea
                name="Message"
                rows={2}
                required
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 resize-none"
              />

              <button
                disabled={status === "Sending..."}
                className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-md font-medium transition disabled:opacity-60"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {/* Status message */}
              {status && status !== "Sending..." && (
                <p className={`text-center font-medium ${
                  status.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
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
