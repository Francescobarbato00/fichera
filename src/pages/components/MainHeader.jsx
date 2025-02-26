import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa"; // Icone social
import { MdSearch, MdShoppingCart } from "react-icons/md"; // Icone utente, ricerca e carrello
import { HiMenu, HiX } from "react-icons/hi"; // Icone per il menu hamburger

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black shadow-md">
      {/* Barra superiore con icone social e funzioni */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        {/* Icone Social */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/dfbarber_shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/DFBarberShop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.tiktok.com/@dfbarbershop7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaTiktok className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/3517297915"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
        </div>

        {/* Icone di ricerca e carrello */}
        <div className="flex items-center space-x-4">
          <a href="/carrello" className="hover:text-yellow-500">
            <MdShoppingCart className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Sezione centrale con logo */}
      <div className="flex justify-center py-4">
        <a href="/" className="hover:scale-110 transition-transform duration-300">
          <img src="/logo.jpg" alt="Logo" className="h-16 md:h-20 w-auto" />
        </a>
      </div>

      {/* Menu di navigazione desktop */}
      <nav className="hidden md:flex justify-center space-x-8 text-sm font-medium py-2 border-t">
        <a href="/about-us" className="hover:text-yellow-500">Chi siamo</a>
        <a href="/Appointment" className="hover:text-yellow-500">Prenota ora</a>
        <a href="/service" className="hover:text-yellow-500">Servizi</a>
        <a href="/shop" className="hover:text-yellow-500">Shop</a>
        <a href="/contact" className="hover:text-yellow-500">Contatti</a>
      </nav>

      {/* Menu mobile */}
      <div className="md:hidden border-t">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center px-4 py-2 w-full justify-between text-black"
        >
          <span>Menu</span>
          {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
        {isMobileMenuOpen && (
          <nav className="flex flex-col items-start space-y-2 px-4 py-2">
            <a href="/about-us" className="block w-full py-1 hover:text-yellow-500">Chi siamo</a>
            <a href="/Appointment" className="block w-full py-1 hover:text-yellow-500">Prenota ora</a>
            <a href="/service" className="block w-full py-1 hover:text-yellow-500">Servizi</a>
            <a href="/shop" className="block w-full py-1 hover:text-yellow-500">Shop</a>
            <a href="/contact" className="block w-full py-1 hover:text-yellow-500">Contatti</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
