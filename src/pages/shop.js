import React from "react";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import ShopHeroSection from "./components/ShopHeroSection";
import ProductSection from "./components/ProductSection";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";

export default function Shop() {
  return (
    <div>
      {/* Top Header */}
      <HeaderTop />

      {/* Main Transparent Header */}
      <div className="relative z-10">
        <MainHeader />
      </div>

      {/* Hero Section */}
      <ShopHeroSection />

      {/* Product Section */}
      <ProductSection />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
