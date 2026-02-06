"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <section className="relative h-[40vh] md:h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/bg.webp')" }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="relative z-10 max-w-4xl px-6 text-white"
                >
                    <h1 className="text-4xl md:text-6xl font-light mb-6">
                        Terms & Conditions
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        Please read these Terms and Conditions carefully before using our services or making any booking with GeoHolidays.
                        By accessing or using our platform, you agree to be bound by these terms.
                        If you do not agree, you should refrain from using our website and services.

                    </p>
                </motion.div>
            </section>

            {/* Main Content - White Background */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-lg prose-gray max-w-none space-y-6
                        prose-p:text-base prose-li:text-base
                        prose-h2:text-3xl prose-h2:font-bold">

                        <p>
                            GS TOURISM (India) Private Limited, operating as GeoHolidays (“we”, “us”, or “our”), provides travel-related services including flight, hotel, visa, holiday package bookings, and related services through our website, mobile app, WhatsApp, phone, and offline channels.
                        </p>

                        <p>
                            By accessing or using our services, making a booking, or inquiring about any travel product, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our services.
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            These Terms & Conditions constitute a legally binding agreement between you and GS TOURISM (India) Private Limited. By using our website, mobile app, or any sales channel, or by making any booking or inquiry, you confirm that you have read, understood, and agree to be bound by these terms.
                        </p>

                        <h2>2. Booking and Confirmation</h2>
                        <ul>
                            <li>All bookings are subject to availability and confirmation by the respective service providers (airlines, hotels, visa authorities, etc.).</li>
                            <li>A booking is considered confirmed only after you receive a written confirmation (via email/SMS/WhatsApp) from GeoHolidays containing booking details and payment receipt.</li>
                            <li>Prices quoted are subject to change without prior notice until full payment and confirmation are received.</li>
                            <li>Special requests (room type, meal preference, bed configuration, etc.) are requests only and not guaranteed.</li>
                        </ul>

                        <h2>3. Payment Terms</h2>
                        <ul>
                            <li>Full or partial payment may be required at the time of booking depending on the product and applicable policy.</li>
                            <li>Payments can be made through credit/debit cards, UPI, net banking, or other available secure methods.</li>
                            <li>All payments are processed through secure payment gateways compliant with PCI DSS standards.</li>
                            <li>GeoHolidays is not responsible for any transaction failures, bank charges, or payment gateway issues.</li>
                        </ul>

                        <h2>4. Cancellation and Refund Policy</h2>
                        <ul>
                            <li>Cancellation policies vary depending on the product (flight, hotel, package, visa, etc.) and the rules of the respective service provider.</li>
                            <li>All cancellation requests must be submitted in writing via email or WhatsApp.</li>
                            <li>Refunds (where applicable) will be processed as per the cancellation policy and may take 7–30 working days depending on the payment method and service provider.</li>
                            <li>No refund will be provided for no-show, partially used services, or voluntary cancellations after the free cancellation period expires.</li>
                        </ul>

                        <h2>5. Travel Documents and User Responsibility</h2>
                        <ul>
                            <li>It is solely your responsibility to ensure you have valid travel documents (passport, visa, etc.) and meet all entry requirements of the destination country.</li>
                            <li>GeoHolidays provides visa application assistance but does not guarantee visa approval — that decision rests solely with the respective embassy or consulate.</li>
                            <li>You are responsible for any additional costs, losses, or consequences arising from missing documents, denied boarding, or refusal of entry.</li>
                        </ul>

                        <h2>6. Changes and Amendments to Booking</h2>
                        <ul>
                            <li>Any changes to confirmed bookings (dates, names, destinations, etc.) are subject to availability and may incur additional charges as per airline/hotel/policy rules.</li>
                            <li>Name changes may attract high fees or may not be permitted on certain non-changeable tickets.</li>
                        </ul>

                        <h2>7. Limitation of Liability</h2>
                        <ul>
                            <li>GeoHolidays acts only as a facilitator/agent and is not liable for services provided by third parties (airlines, hotels, transport providers, etc.).</li>
                            <li>We are not responsible for flight delays, cancellations, baggage loss, injury, illness, death, or any loss/damage arising during travel.</li>
                            <li>Force majeure events (natural disasters, pandemics, strikes, war, government restrictions, etc.) are beyond our control and no refund or compensation will be provided in such cases.</li>
                        </ul>

                        <h2>8. Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms & Conditions are governed by the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of courts in Bhopal, Madhya Pradesh.
                        </p>

                        {/* Contact */}
                        <div className="pt-12 border-t border-gray-200 ">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions regarding these Terms & Conditions, please contact us:
                            </p>

                            <ul className="space-y-4 text-gray-700">
                                <li>
                                    <strong>Email:</strong>{" "}
                                    <Link href="mailto:info@geoholidays.in" className="text-indigo-600 hover:underline">
                                        info@geoholidays.in
                                    </Link>
                                </li>
                                <li><strong>Phone:</strong> +91 78801 70012</li>
                                <li>
                                    <strong>Address:</strong><br />
                                    Office No 34, Maple High Street,<br />
                                    Narmadapuram Rd, in front of Aashima Mall,<br />
                                    Bagmugaliya, Bhopal, Madhya Pradesh 462042
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
}