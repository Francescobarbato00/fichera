import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleJoinClick = async () => {
    if (!email) {
      setMessage("Per favore, inserisci un'email valida.");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Iscrizione completata con successo!");
        setEmail(""); // Pulisce il campo email
      } else {
        setMessage("Errore durante l'iscrizione. Riprova più tardi.");
      }
    } catch (error) {
      console.error("Errore:", error);
      setMessage("Errore durante l'iscrizione. Riprova più tardi.");
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full md:flex-1 px-4 py-2 text-black text-sm placeholder-gray-600 border border-white focus:outline-none"
            />
            <button
              onClick={handleJoinClick}
              className="bg-white text-black px-5 py-2 text-xs font-bold uppercase mt-2 md:mt-0 md:ml-2"
            >
              Join
            </button>
          </div>
          {message && <p className="text-xs mt-2">{message}</p>}
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
            <a href="https://wa.me/0683986576" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Sezione Informazioni */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold uppercase mb-2 tracking-wider">Informazioni</h3>
          <div className="h-[1px] w-16 bg-white mb-4 mx-auto md:mx-0"></div>
          <ul className="text-xs leading-relaxed space-y-2">
            <li>
              <a href="/spedizione" className="hover:underline">
                Politica di spedizione
              </a>
            </li>
            <li>
              <a href="/rimborsi" className="hover:underline">
                Politica di rimborso
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Politica sulla privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sezione Partita IVA */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © 2025 Daniele Fichera Barber Shop. Tutti i diritti riservati. P.IVA: 17455801005
      </div>
    </footer>
  );
};

export default Footer;
