"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
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
                        Privacy Policy
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        We value your trust and are committed to protecting your personal information.
                        This Privacy Policy explains how GeoHolidays collects, uses, and safeguards your data.
                        We ensure that your information is handled responsibly, transparently, and securely at every stage.

                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="prose prose-gray max-w-none space-y-6
                          prose-p:text-base prose-li:text-base
                          prose-h2:text-3xl prose-h2:font-bold">

                        <p>
                            GeoHolidays (operated by GS Tourism India Private Limited) values
                            your trust and is committed to safeguarding your personal
                            information. This Privacy Policy describes how we collect, use,
                            store, and protect your information when you interact with our
                            website and travel services.
                        </p>

                        <p>
                            This policy applies to all users who inquire, book, or use our
                            travel services through our website, phone, WhatsApp, email,
                            social media, or office channels.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <ul>
                            <li>Name, phone number, and email address</li>
                            <li>Travel destinations and preferences</li>
                            <li>Passport and ID details when required</li>
                            <li>Payment and billing information</li>
                            <li>Communication and inquiry history</li>
                        </ul>

                        <h2>2. Purpose of Data Collection</h2>
                        <ul>
                            <li>To prepare customized travel packages</li>
                            <li>To process bookings and reservations</li>
                            <li>To coordinate with airlines, hotels, and visa partners</li>
                            <li>To provide travel support and updates</li>
                            <li>To improve our services and customer experience</li>
                        </ul>

                        <h2>3. Sharing of Information</h2>
                        <p>
                            Your data may be shared with airlines, hotels, transport
                            providers, visa agencies, and payment gateways strictly for
                            booking and service delivery purposes.
                        </p>
                        <p>
                            We do not sell or rent your personal data to third parties for
                            marketing.
                        </p>

                        <h2>4. Cookies & Tracking</h2>
                        <p>
                            Our website may use cookies and analytics tools to understand
                            visitor behavior and improve performance. You can disable cookies
                            through your browser settings.
                        </p>

                        <h2>5. Data Security</h2>
                        <p>
                            We apply reasonable technical and administrative safeguards to
                            protect your data. However, no online transmission is completely
                            secure, and users share information at their own discretion.
                        </p>

                        <h2>6. Data Retention</h2>
                        <p>
                            We retain customer data only as long as required for service
                            delivery, legal compliance, and record keeping.
                        </p>

                        <h2>7. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not
                            responsible for their privacy practices.
                        </p>

                        <h2>8. User Rights</h2>
                        <ul>
                            <li>Request access to stored data</li>
                            <li>Request correction of incorrect information</li>
                            <li>Request deletion where legally permitted</li>
                        </ul>

                        <h2>9. Policy Updates</h2>
                        <p>
                            We may update this policy from time to time. Updated versions
                            will be posted on this page.
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
