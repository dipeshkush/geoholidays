// components/CTA.jsx
"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-8 bg-gradient-to-b from-gray-950 to-black overflow-hidden">

      {/* subtle glow texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* GRID 4 — ratio control */}
        <div className="grid md:grid-cols-4 gap-10 items-center">

          {/* LEFT — 3 parts */}
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
              Ready for Your Next{" "}
              <span className="text-[#ff7a00] font-semibold">
                Premium Journey?
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Have questions or want to plan your next premium travel journey?
              Our experts are ready to design a personalized experience for you.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              Quick response • Personalized planning • 24/7 support
            </p>
          </div>

          {/* RIGHT — 1 part */}
          <div className="md:col-span-1 md:text-right">
            <Link
              href="#contact"
              className="inline-block bg-white/10 hover:bg-white/20
                         text-white font-semibold
                         px-8 py-4 rounded-xl
                         transition shadow-lg whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
