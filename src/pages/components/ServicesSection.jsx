import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Prima immagine */}
        <div className="text-center border border-white">
          <img
            src="/1.jpg" // Cambia con l'immagine appropriata
            alt="Taglio"
            className="w-full h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">TAGLIO</h3>
        
        </div>

        {/* Seconda immagine */}
        <div className="text-center border border-white">
          <img
            src="/2.jpg" // Cambia con l'immagine appropriata
            alt="Barba"
            className="w-full h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">BARBA</h3>
          
        </div>

        {/* Terza immagine */}
        <div className="text-center border border-white">
          <img
            src="/3.jpg" // Cambia con l'immagine appropriata
            alt="Trattamenti"
            className="w-full h-80 object-cover"
          />
          <h3 className="mt-4 text-lg font-normal text-gray-800">TRATTAMENTI</h3>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
