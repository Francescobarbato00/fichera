import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import AppointmentHeader from "./components/AppointmentHeader";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import BookingFormSection from "./components/BookingFormSection";
import OtherBookingMethods from "./components/OtherBookingMethods";

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
      <BookingFormSection />

      {/* Divisore */}
      <div className="border-t border-gray-300 mx-auto w-3/4 my-6"></div>

      {/* Other Booking Methods Section */}
      <OtherBookingMethods />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
