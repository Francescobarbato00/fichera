import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ContactSection from "./components/ContactSection";
import ContactIntroSection from "./components/ContactIntroSection"; // Nuova sezione
import WorkingHoursSection from "./components/WorkingHoursSection";

export default function Contact() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>

      {/* Intro Section */}
      <ContactIntroSection />

      {/* Sezione Contatti */}
      <div className="pt-16">
      <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
        <ContactSection />

        <WorkingHoursSection />
      </div>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
