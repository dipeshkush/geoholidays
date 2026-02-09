"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-12">
        <ContactForm showHeader={true} />
      </div>

      {/* Google Map Section */}
      <section className=" max-w-7xl mx-auto py-4">
           <div className=" h-[400px] md:h-[350px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
             <iframe
               title="GeoHolidays Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d77.435678!3d23.188456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e35217c821%3A0xb864d1694c6e3b8c!2sGeo%20Holidays%2C%20MICE%20and%20corporate%20group%20Travel!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
               width="100%"
               height="100%"
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full border-0"
               allowFullScreen
             />
           </div>
         </section>

      <CTA />
      <Footer />
    </div>
  );
}