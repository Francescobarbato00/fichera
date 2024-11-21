import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const BarbersSection = () => {
  const barbers = [
    {
      name: " Daniele Fichera",
      role: "Barbiere Professionista",
      image: "/img.jpg", // Percorso immagine
      description:
        "Esperto in tagli classici e moderni. Passione e precisione al tuo servizio.",
    },
    {
      name: "George Smith",
      role: "Barbiere Senior",
      image: "/img.jpg", // Percorso immagine
      description:
        "Specializzato in cura della barba e trattamenti personalizzati.",
    },
    {
      name: "Frank Giordano",
      role: "Barbiere Creativo",
      image: "/img.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">Il Nostro</span> Team
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
          Conosci i nostri barbieri, artisti esperti nella cura del tuo stile.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {barbers.map((barber, index) => (
          <div key={index} className="relative group">
            {/* Immagine */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-52 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                <p className="text-xs sm:text-sm mb-3 sm:mb-4">{barber.description}</p>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="hover:text-gray-200">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-gray-200">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-gray-200">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-gray-200">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            {/* Informazioni */}
            <div className="bg-gray-100 text-gray-800 text-center py-3 sm:py-4">
              <h3 className="text-base sm:text-lg font-semibold text-yellow-500">
                {barber.name}
              </h3>
              <p className="text-xs sm:text-sm">{barber.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarbersSection;
