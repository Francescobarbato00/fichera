import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import HomeSection from "./components/HomeSection";
import ChatWidget from "./components/ChatWidget";
import BookAppointment from "./components/BookAppointment";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <IntroAnimation>
      <div>
        {/* Top Header */}
        <HeaderTop />

        {/* Main Transparent Header */}
        <div className="relative z-10">
          <MainHeader />
        </div>

        {/* Home Section */}
        <HomeSection />
        <BookAppointment />
        <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
        <ChatWidget />
        <ServicesSection />
        <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>
        <TestimonialsSection />
        <Footer />
      </div>
    </IntroAnimation>
  );
}
