import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
        {/* Prima immagine */}
        <div className="text-center border border-white">
          <img
            src="/taglio5.jpeg" // Cambia con l'immagine appropriata
            alt="Taglio"
            className="w-full h-60 sm:h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">TAGLIO</h3>
        </div>

        {/* Seconda immagine */}
        <div className="text-center border border-white">
          <img
            src="/taglio2.jpeg" // Cambia con l'immagine appropriata
            alt="Barba"
            className="w-full h-60 sm:h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">BARBA</h3>
        </div>

        {/* Terza immagine */}
        <div className="text-center border border-white">
          <img
            src="/taglio3.jpeg" // Cambia con l'immagine appropriata
            alt="Trattamenti"
            className="w-full h-60 sm:h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">TRATTAMENTI</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
