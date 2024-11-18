import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import DynamicTextSection from "./components/DynamicTextSection";
import ServicesListSection from "./components/ServicesListSection"; // Import della nuova sezione
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import HowWeWorkSection from "./components/HowWeWorkSection";

export default function Services() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>

      {/* Dynamic Text Section */}
      <DynamicTextSection />

      {/* Services List Section */}
      <ServicesListSection />
      <HowWeWorkSection />
      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
