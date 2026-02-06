"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqItems = [
    {
        question: "Is there a free trial available?",
        answer:
            "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
        question: "Can other info be added to an invoice?",
        answer:
            "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
        question: "How does billing work?",
        answer:
            "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
        question: "How do I change my account email?",
        answer:
            "You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.",
    },
    {
        question: "How does support work?",
        answer:
            "If you're having trouble with Untitled UI, we're here to try and help via hello@untitledui.com.",
    },
    {
        question: "Do you provide tutorials?",
        answer:
            "Not yet, but we're working on it! In the meantime, we've done our best to make it intuitive.",
    },
    {
        question: "What happens if I exceed my plan limits?",
        answer:
            "If you exceed your plan limits, we will notify you and offer options to upgrade.",
    },
    {
        question: "Where can I find documentation?",
        answer:
            "Our full documentation is available online at our knowledge base.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* Heading — animated only */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14 md:mb-16"
                >
                    <h2 className="text-5xl font-light text-gray-900">
                        Frequently <span className="text-blue-900 font-semibold">Asked Questions</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        Quick answers to the most common questions about booking with GeoHoliday
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="grid md:grid-cols-2 gap-5">

                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.06 }}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden 
                 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8">
                                    {item.question}
                                </span>

                                <span className="flex-shrink-0 text-indigo-600 text-2xl font-medium">
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed whitespace-pre-line">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}

                </div>

                {/* Bottom hint — animated only */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-center mt-4"
                >
                    <p className="text-gray-600">
                        Still have questions?{" "}
                        <a
                            href="/contact-us"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Contact our team
                        </a>{" "}
                        — we’re happy to help!
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
