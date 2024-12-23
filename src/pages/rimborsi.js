import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import RefundPolicy from "./components/RefundPolicy";


export default function Rimborsi() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>
  
      <RefundPolicy />

      {/* Chat Widget */}
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
