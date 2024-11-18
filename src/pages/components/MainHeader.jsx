import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"; // Icone social
import { MdAccountCircle, MdSearch, MdShoppingCart } from "react-icons/md"; // Icone utente, ricerca e carrello

const MainHeader = () => {
  return (
    <div className="w-full bg-white text-black shadow-md">
      <div className="flex justify-between items-start px-6 py-2">
        {/* Icone Social a sinistra */}
        <div className="flex items-start space-x-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>

        {/* Logo al centro */}
        <div className="flex justify-center items-center">
          <a href="/" className="hover:scale-110 transition-transform duration-300">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </a>
        </div>

        {/* Icone a destra */}
        <div className="flex items-start space-x-4">
          <button className="hover:text-yellow-500">
            <MdAccountCircle className="h-6 w-6" />
          </button>
          <button className="hover:text-yellow-500">
            <MdSearch className="h-6 w-6" />
          </button>
          <button className="hover:text-yellow-500">
            <MdShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu centrato con più spazio tra gli elementi */}
      <nav className="flex justify-center space-x-8 text-sm font-medium py-2">
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
