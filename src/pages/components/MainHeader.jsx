import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa"; // Icone social
import { MdAccountCircle, MdSearch, MdShoppingCart } from "react-icons/md"; // Icone utente, ricerca e carrello

const MainHeader = () => {
  return (
    <div className="w-full bg-white text-black shadow-md">
      {/* Contenitore superiore */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 space-y-2 md:space-y-0">
        {/* Icone Social a sinistra */}
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
          <a href="https://wa.me/3517297915" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
          <FaWhatsapp className="h-6 w-6" />
          </a>

        </div>

        {/* Logo al centro */}
        <div className="flex justify-center items-center">
          <a href="/" className="hover:scale-110 transition-transform duration-300">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-16 md:h-20 w-auto"
            />
          </a>
        </div>

        {/* Icone a destra */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-yellow-500">
            <MdSearch className="h-6 w-6" />
          </button>
          <button className="hover:text-yellow-500">
            <MdShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu centrato con più spazio tra gli elementi */}
      <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm font-medium py-2 px-4">
        <a href="/about-us" className="hover:text-yellow-500">Chi siamo</a>
        <a href="/Appointment" className="hover:text-yellow-500">Prenota ora</a>
        <a href="/service" className="hover:text-yellow-500">Servizi</a>
        <a href="/shop" className="hover:text-yellow-500">Shop</a>
        <a href="/contact" className="hover:text-yellow-500">Contatti</a>
      </nav>
    </div>
  );
};

export default MainHeader;
