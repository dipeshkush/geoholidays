"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section with Background Image */}
            <section className="relative h-[40vh] md:h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/bg.webp')" }} // ← yaha apni image daal dena
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
                        Refund Policy
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        At GeoHolidays, we strive to provide a seamless and transparent booking experience.
                        Please review our refund and cancellation policy carefully before making any booking.
                        This will help you understand eligibility, timelines, and applicable charges, if any.

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
                            GS TOURISM (India) Private Limited, operating as GeoHolidays (“we”, “us”, or “our”), is committed to providing transparent and fair refund policies for all travel services booked through our platform.
                        </p>

                        <p>
                            Refund eligibility, processing time, and cancellation charges depend on the type of service (flight, hotel, holiday package, visa, etc.), the service provider’s rules, and the timing of the cancellation request.
                        </p>

                        <h2>1. General Cancellation & Refund Rules</h2>
                        <ul>
                            <li>Cancellation requests must be submitted in writing via email or WhatsApp.</li>
                            <li>All cancellations are subject to the cancellation policy of the respective service provider (airline, hotel, tour operator, visa authority, etc.).</li>
                            <li>Refunds (if applicable) are processed back to the original payment method within 7–30 working days, depending on the bank/payment gateway.</li>
                            <li>No refund will be provided for no-show, partially used services, or voluntary cancellations after the free cancellation period expires.</li>
                            <li>Any taxes, convenience fees, or processing charges are non-refundable.</li>
                        </ul>

                        <h2>2. Flight Bookings</h2>
                        <ul>
                            <li>Refund rules are strictly governed by airline policies (non-refundable tickets usually have no refund).</li>
                            <li>Partially refundable tickets may have cancellation charges deducted.</li>
                            <li>Airline-imposed penalties + our service fee will be deducted from the refund amount.</li>
                            <li>Refunds for cancelled flights by airline will be processed as per airline policy.</li>
                        </ul>

                        <h2>3. Hotel Bookings</h2>
                        <ul>
                            <li>Most hotels have free cancellation until a specific date/time (mentioned at time of booking).</li>
                            <li>After the free cancellation period, cancellation charges apply as per hotel policy.</li>
                            <li>No-show or early check-out usually results in full night/room charge.</li>
                            <li>Refunds are processed after hotel confirmation (may take 10–30 days).</li>
                        </ul>

                        <h2>4. Holiday Packages & Group Tours</h2>
                        <ul>
                            <li>Cancellations made 30+ days before departure → 90–100% refund (minus processing fee)</li>
                            <li>15–30 days before departure → 50–75% refund</li>
                            <li>Less than 15 days before departure → No refund / high cancellation charges</li>
                            <li>Group tours have stricter policies due to fixed departures and advance payments to vendors.</li>
                            <li>No refund for no-show or voluntary early departure from tour.</li>
                        </ul>

                        <h2>5. Visa Services</h2>
                        <ul>
                            <li>Visa processing fees are non-refundable once application is submitted.</li>
                            <li>Visa rejection by embassy/consulate → no refund of processing/service fee.</li>
                            <li>Only government visa fees (if not yet paid to embassy) may be refunded.</li>
                        </ul>

                        <h2>6. Force Majeure & Exceptional Cases</h2>
                        <p>
                            In case of force majeure (natural disasters, pandemics, government restrictions, war, strikes, etc.), refunds will be processed as per the service provider’s policy. GeoHolidays will assist in refund claims but is not liable for delays or denials by third parties.
                        </p>

                        <h2>7. Refund Processing Time</h2>
                        <ul>
                            <li>Refunds are initiated within 7–10 working days after receiving cancellation confirmation from the service provider.</li>
                            <li>Actual credit/refund to your account may take 7–30 days depending on your bank/payment method.</li>
                            <li>No cash refunds are provided — refunds go back to the original payment method only.</li>
                        </ul>

                        {/* Contact */}
                        <div className="pt-12 border-t border-gray-200 mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions regarding our Refund Policy or need assistance with a cancellation/refund request, please contact us:
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