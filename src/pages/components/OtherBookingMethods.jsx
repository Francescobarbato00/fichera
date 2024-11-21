import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";

const OtherBookingMethods = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8">
        {/* Immagine */}
        <div className="flex justify-center">
          <img
            src="/sede.jpg" // Sostituisci con il percorso della tua immagine
            alt="Barbershop"
            className="shadow-lg w-full max-w-md lg:max-w-full h-auto"
          />
        </div>

        {/* Informazioni */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            <span className="text-yellow-500">Altri</span> Metodi di Prenotazione
          </h2>
          <p className="text-gray-600 mb-6 text-center lg:text-left">
            Scopri tutti i modi per metterti in contatto con noi e prenotare il tuo appuntamento.
            Siamo sempre disponibili per soddisfare ogni tua esigenza.
          </p>

          {/* Dettagli */}
          <div className="space-y-6">
            {/* Indirizzo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl mb-2 sm:mb-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Indirizzo Barbershop</h4>
                <p className="text-gray-600">Via Alberto Moravia, 77 Roma RM, Italia CAP: 00143</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
              <FaEnvelope className="text-yellow-500 text-2xl mb-2 sm:mb-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">df7barber@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
              <FaWhatsapp className="text-yellow-500 text-2xl mb-2 sm:mb-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-800">WhatsApp</h4>
                <p className="text-gray-600">+ 06 8398 6576</p>
              </div>
            </div>

            {/* Orari */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
              <FaClock className="text-yellow-500 text-2xl mb-2 sm:mb-0" />
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
