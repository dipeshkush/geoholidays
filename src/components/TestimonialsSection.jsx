'use client';

import { useEffect, useRef, useState } from 'react';
import { UserCircle2, MessageSquare, Star } from 'lucide-react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Amit Patel",
            feedback:
                "GeoHolidays exceeded my expectations with a truly custom travel experience. From planning to execution, every detail was handled professionally. The itinerary matched my preferences perfectly and the support team stayed connected throughout the journey.",
        },
        {
            name: "Rahul Varma",
            feedback:
                "The Ladakh bike trip was an absolute thrill and extremely well organized. From permits and stays to backup support and route planning — everything was taken care of. I could fully focus on the adventure without worrying about logistics.",
        },
        {
            name: "Neha Reddy",
            feedback:
                "My Maldives honeymoon was magical and completely stress-free thanks to GeoHolidays. The resort selection, transfers, and special arrangements were perfect. It truly felt like a premium, once-in-a-lifetime experience.",
        },
        {
            name: "Priya Sharma",
            feedback:
                "Their personalized itinerary and attention to detail made our Goa trip smooth and memorable. Every activity was well timed and the hotel choices were excellent. I highly recommend them for family vacations.",
        },
        {
            name: "Raj Kumar",
            feedback:
                "Very professional and responsive team. From visa help to bookings and on-trip coordination — everything was seamless. This is one of the most reliable travel partners I have worked with so far.",
        },
    ];


    const cardsPerPage = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + cardsPerPage) % testimonials.length;

            gsap.to(cardRefs.current, {
                opacity: 0,
                y: 30,
                duration: 0.4,
                stagger: 0.1,
                onComplete: () => {
                    setCurrentIndex(nextIndex);
                }
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
        );
    }, [currentIndex]);

    const visibleTestimonials = [];
    for (let i = 0; i < cardsPerPage; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
    }

    return (
        <section id="testimonials" className="w-full bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-light text-gray-900 mb-4">
                        What Our <span className="text-blue-900  font-semibold">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join thousands who love the Super Canteen experience — here’s what they’re saying!
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleTestimonials.map((t, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="bg-gray-50 rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 duration-300 flex flex-col justify-between min-h-[220px] md:min-h-[240px]"
                        >
                            <p className="text-gray-600 italic mb-6">“{t.feedback}”</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <UserCircle2 className="h-10 w-10 text-blue-700" />
                                <div>
                                    <p className="font-semibold text-gray-800">{t.name}</p>
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
