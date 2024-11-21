import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import AppointmentHeader from "./components/AppointmentHeader";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import OtherBookingMethods from "./components/OtherBookingMethods";
import HowToBookSection from "./components/HowToBookSection";

export default function Appointment() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>

      {/* Appointment Header Section */}
      <AppointmentHeader />

      {/* Booking Form Section */}
      <HowToBookSection />

      {/* Divisore */}
      <div className="relative z-20 bg-white py-1">
        <div className="border-t border-gray-300 mx-auto w-3/4"></div>
      </div>

      {/* Other Booking Methods Section */}
      <OtherBookingMethods />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
