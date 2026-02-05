"use client";

import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/80 z-10" /> 
        <div className="absolute inset-0">
          <img
            src="/Footer1.webp"
            alt="Footer background"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 lg:gap-20">
          
          {/* Column 1 - About */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">About GeoHoliday</h4>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Crafting unforgettable journeys with care and precision — your trusted partner for every destination.
            </p>
            <div className="flex items-center gap-5">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links + Other Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="#hero" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
             <div>
              <h4 className="text-lg font-semibold text-white mb-4">Other Links</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-5">

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white flex-shrink-0" size={20} />
                <span>+91 78801 70012</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white flex-shrink-0" size={20} />
                <span> info@geoholidays.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 border-t border-gray-800 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p className="text-center sm:text-right mt-2 sm:mt-0">© {new Date().getFullYear()} GEOHOLIDAYS. ALL RIGHTS RESERVED.</p>

         <p className="text-center sm:text-right mt-2 sm:mt-0">
            DESIGNED BY &nbsp;
            <a
              href="https://webseeder.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-300"
            >
              WEBSEEDER TECHNOLOGIES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}