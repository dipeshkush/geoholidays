"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Abhitesh Shukla",
    role: "Managing Director",
    image: "/abhitesh-shukla.webp",
    bio: "Visionary leader driving global travel partnerships, strategic expansion, and premium customer experiences across international markets.",
  },
  {
    name: "Mr. Saurav Shukla",
    role: "Director - Sales & Finance",
    image: "/saurav-shukla.webp",
    bio: "Leads revenue strategy, financial planning, and enterprise sales — ensuring sustainable growth and client value delivery.",
  },
  {
    name: "Mr. Akash Shukla",
    role: "Director - Operations",
    image: "/akash-shukla.webp",
    bio: "Heads operational excellence, execution quality, and service reliability across all travel programs and customer journeys.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-12 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-light text-white mt-6">
            Meet Our <span className="text-[#ff7a00] font-semibold">Team</span>
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Leadership that powers unforgettable travel experiences through strategic vision, operational excellence, and personalized service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden
                         bg-[#111827] border border-white/10
                        
                         transition duration-500"
            >

              {/* Image */}
              <div className="relative h-[460px] overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-700
                             group-hover:scale-110
                             group-hover:blur-md"
                />

                {/* DARK OVERLAY ON HOVER */}
                <div className="absolute inset-0
                                group-hover:bg-black/65
                                transition duration-500" />

                {/* CENTER INFO — NO BOX */}
                <div className="absolute inset-0 flex items-center justify-center
                                px-10 text-center
                                opacity-0 group-hover:opacity-100
                                transition duration-500">

                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    {member.bio}
                  </p>

                </div>

                {/* Bottom gradient always */}
                <div className="absolute inset-x-0 bottom-0 h-40
                                bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* STABLE NAME PANEL */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="text-xl font-semibold text-white text-center">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-300 text-center mt-1">
                  {member.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
