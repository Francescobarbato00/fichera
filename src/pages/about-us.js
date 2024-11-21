import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import AboutUsSection from "./components/AboutUsSection";
import FounderSection from "./components/FounderSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import BarbersSection from "./components/BarbersSection";
import BarbershopSection from "./components/BarbershopSection";

export default function AboutUs() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>

      {/* About Us Section */}
      <AboutUsSection />
      <BarbershopSection />

      {/* Founder Section */}
      <FounderSection />
      <BarbersSection />
      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
