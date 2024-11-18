import React from "react";
import { FaPlay } from "react-icons/fa";

const HowWeWorkSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/sfondoo.jpg')", // Percorso immagine di sfondo
      }}
    >
      {/* Overlay nero con trasparenza */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Overlay giallo */}
      <div className="absolute inset-0 bg-yellow-500 opacity-20"></div>

      {/* Contenuto */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          <span className="text-yellow-500">Scopri</span> Come Lavoriamo
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Offriamo un servizio professionale che combina tecnica e passione.
          Guarda il nostro team all’opera per comprendere l’attenzione al
          dettaglio che ci distingue.
        </p>
      </div>

      {/* Pulsante Play */}
      <div className="mt-12 relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-500 rounded-full cursor-pointer shadow-lg hover:bg-yellow-600 transition duration-300">
            <FaPlay className="text-white text-2xl" />
          </div>
          <span className="mt-4 text-lg font-medium text-white">
            Guarda il Video
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
