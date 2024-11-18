import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";

const OtherBookingMethods = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Immagine */}
        <div>
          <img
            src="/sede.jpg" // Sostituisci con il percorso della tua immagine
            alt="Barbershop"
            className="shadow-lg w-full h-auto"
          />
        </div>

        {/* Informazioni */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Altri</span> Metodi di Prenotazione
          </h2>
          <p className="text-gray-600 mb-6">
            Scopri tutti i modi per metterti in contatto con noi e prenotare il tuo appuntamento.
            Siamo sempre disponibili per soddisfare ogni tua esigenza.
          </p>

          {/* Dettagli */}
          <div className="space-y-6">
            {/* Indirizzo */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Indirizzo Barbershop</h4>
                <p className="text-gray-600">Via Roma, 123 - Milano</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-500 text-2xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">info@barbershop.it</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-yellow-500 text-2xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">WhatsApp</h4>
                <p className="text-gray-600">+39 345 6789012</p>
              </div>
            </div>

            {/* Orari */}
            <div className="flex items-center space-x-4">
              <FaClock className="text-yellow-500 text-2xl" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Orari di Apertura</h4>
                <p className="text-gray-600">Mar - Sab: 10:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBookingMethods;
