import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import ShippingPolicies from "./components/ShippingPolicies";

export default function Spedizione() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>
  
      < ShippingPolicies />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
