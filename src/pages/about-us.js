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
      <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
      <BarbershopSection />
      <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
      {/* Founder Section */}
      <FounderSection />
      <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
      <BarbersSection />
      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
