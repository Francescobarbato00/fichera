import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 px-6">
        {/* Sezione Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold uppercase mb-2 tracking-wider">Newsletter</h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto md:mx-0"></div>
          <p className="text-xs leading-relaxed mb-4">
            Vuoi rimanere aggiornato su tutte le novità e offerte speciali del nostro barbershop?
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-2 md:space-y-0">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:flex-1 px-4 py-2 text-black text-sm placeholder-gray-600 border border-white focus:outline-none"
            />
            <button className="bg-white text-black px-5 py-2 text-xs font-bold uppercase mt-2 md:mt-0 md:ml-2">
              Join
            </button>
          </div>
        </div>

        {/* Sezione Social */}
        <div className="text-center">
          <h3 className="text-sm font-bold uppercase mb-2 tracking-wider">Seguici su</h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto"></div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/dfbarber_shop/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/DFBarberShop/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaTiktok className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Sezione Informazioni */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold uppercase mb-2 tracking-wider">Informazioni</h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto md:mx-0"></div>
          <ul className="text-xs leading-relaxed space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Unisciti a noi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politica di spedizione
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politica di rimborso
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Politica sulla privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Termini di servizio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
