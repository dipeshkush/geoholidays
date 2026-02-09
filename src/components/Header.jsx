"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const menuRef = useRef(null);

  // Only do scroll spy on home page
  const isHomePage = pathname === "/" || pathname === "";

  const navSections = ["#hero", "#about", "#services", "#team", "#contact"];
  const allSections = [...navSections];

  useEffect(() => {

    if (!isHomePage) {
      setActive("/contact-us");
      return;
    }

const handleScroll = () => {
  const scrollPosition = window.scrollY + 120;
  let current = null;

  for (const id of allSections) {
    const element = document.querySelector(id);
    if (!element) continue;

    const top = element.offsetTop;
    const height = element.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      current = id;
      break;
    }
  }

  setActive(current);
};


    // Run once + listen
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const navLink = (href, label, isMobile = false) => {

    let isActive = false;

    if (isHomePage) {
      isActive = active === href;
    } else {
      isActive = href === "/contact-us";
    }

    const linkHref =
      href.startsWith("#") && isHomePage
        ? href
        : href === "#hero"
          ? "/"
          : href.startsWith("#")
            ? `/#${href.replace("#", "")}`
            : href;

    const underlineClass = isMobile
      ? ""
      : `after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
         after:bg-[#ff7a00] after:origin-left after:transition-transform after:duration-300
         ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`;

    return (
      <Link
        href={linkHref}
        onClick={() => setOpen(false)}
        className={`relative font-medium transition text-[#0b1f3a] ${underlineClass}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 bg-white md:bg-transparent md:backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="GeoHolidays Logo"
            width={80}
            height={20}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white px-8 py-2 rounded-full">
          {navLink("#hero", "Home")}
          {navLink("#about", "About")}
          {navLink("#services", "Services")}
          {navLink("#team", "Our Team")}
          {navLink("/contact-us", "Contact Us")}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden w-full bg-white
                transition-all duration-300 overflow-hidden text-gray-700
                ${open ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}
      >

        <div className="px-6 flex flex-col items-center gap-8 text-lg font-medium text-center">
          {navLink("#hero", "Home", true)}
          {navLink("#about", "About", true)}
          {navLink("#services", "Services", true)}
          {navLink("#team", "Our Team", true)}
          {navLink("/contact-us", "Contact Us", true)}

          {/* Contact info */}
          <div className="mt-6 pt-6 border-t border-gray-200 w-full text-center text-base text-gray-600 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+91 78801 70012</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@geoholidays.in</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}