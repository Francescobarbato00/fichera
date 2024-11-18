import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Sezione Newsletter */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-bold uppercase mb-2 tracking-wider">
            Newsletter
          </h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto"></div>
          <p className="text-xs leading-relaxed text-center mb-4">
            Vuoi rimanere aggiornato su tutte le novità e offerte speciali del
            nostro barbershop?
          </p>
          <div className="flex flex-col items-center space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full max-w-md px-4 py-2 text-black text-sm placeholder-gray-600 border border-white focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase">
              Join
            </button>
          </div>
        </div>

        {/* Sezione Social */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-bold uppercase mb-2 tracking-wider">
            Give us a follow
          </h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto"></div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Sezione Informazioni */}
        <div>
          <h3 className="text-center text-sm font-bold uppercase mb-2 tracking-wider">
            Informazioni
          </h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto"></div>
          <ul className="text-xs leading-relaxed space-y-2 text-center">
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
