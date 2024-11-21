import React from "react";
import { FaCut, FaBeer, FaSmile } from "react-icons/fa";

const BarbershopSection = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Immagine principale */}
        <div>
          <img
            src="/df.jpg" // Cambia con il percorso corretto dell'immagine
            alt="Barbershop"
            className="rounded-md shadow-lg w-full h-auto"
          />
        </div>

        {/* Testo introduttivo */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Benvenuti</span> nel nostro Barbershop
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Scopri un’esperienza unica nel nostro barbershop. Offriamo servizi di alta qualità
            in un ambiente accogliente e professionale, dove ogni cliente è al centro della
            nostra attenzione.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-xl sm:text-2xl">
                <FaSmile />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Un’esperienza personalizzata per ogni cliente.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-xl sm:text-2xl">
                <FaCut />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Tagli e stili innovativi per ogni occasione.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-yellow-500 text-xl sm:text-2xl">
                <FaBeer />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                La cura della barba con prodotti di alta qualità.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Icone dei servizi */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div>
          <FaCut className="text-yellow-500 text-5xl sm:text-6xl mx-auto mb-4" />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Servizi di Taglio
          </h3>
        </div>
        <div>
          <FaBeer className="text-yellow-500 text-5xl sm:text-6xl mx-auto mb-4" />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Cura della Barba
          </h3>
        </div>
        <div>
          <FaSmile className="text-yellow-500 text-5xl sm:text-6xl mx-auto mb-4" />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Ambiente Accogliente
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BarbershopSection;
