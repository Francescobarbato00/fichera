import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatWidget = () => {
  const handleOpenWhatsApp = () => {
    const whatsappNumber = "3517297915";
    const whatsappMessage = "Ciao! Vorrei ricevere maggiori informazioni.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Icona WhatsApp */}
      <div
        onClick={handleOpenWhatsApp}
        className="bg-yellow-500 text-white p-4 rounded-full cursor-pointer shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12"
        style={{ width: "60px", height: "60px" }}
      >
        <FaWhatsapp className="h-6 w-6" />
      </div>
    </div>
  );
};

export default ChatWidget;
