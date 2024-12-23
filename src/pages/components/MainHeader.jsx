import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa"; // Icone social
import { MdShoppingCart } from "react-icons/md"; // Icone carrello
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

        {/* Icone di carrello */}
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
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center px-4 py-2 w-full justify-between text-black"
        >
          <HiMenu className="h-6 w-6" />
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-transform transform translate-x-0">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
            >
              <HiX />
            </button>
            <nav className="flex flex-col items-center space-y-6 text-xl font-medium">
              <a
                href="/about-us"
                className="hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chi siamo
              </a>
              <a
                href="/Appointment"
                className="hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prenota ora
              </a>
              <a
                href="/service"
                className="hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servizi
              </a>
              <a
                href="/shop"
                className="hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="/contact"
                className="hover:text-yellow-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contatti
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
