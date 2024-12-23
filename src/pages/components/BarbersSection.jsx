import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const BarbersSection = () => {
  const barbers = [
    {
      name: "Daniele",
      role: "Titolare",
      image: "/daniele.jpg", // Percorso immagine
      description:
        "Esperto in tagli classici e moderni. Passione e precisione al tuo servizio. La passione per ciò che facciamo è ciò che rende ogni cliente unico.",
    },
    {
      name: "Guglielmo detto gullo",
      role: "Barbiere",
      image: "/gullo.jpg", // Percorso immagine
      description:
        "Specializzato in cura della barba e trattamenti personalizzati. Ogni barba racconta una storia, ed io sono qui per valorizzarla.",
    },
    {
      name: "Luca",
      role: "Barbiere",
      image: "/luca.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale. Il tuo stile è la mia ispirazione per creare qualcosa di speciale.",
    },
    {
      name: "Claudia",
      role: "Barbiere",
      image: "/claudia.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale. Un sorriso e un taglio perfetto possono cambiare la giornata.",
    },
    {
      name: "Il maestro",
      role: "Barbiere",
      image: "/maestro.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale. L’arte del taglio non si impara, si vive ogni giorno.",
    },
    {
      name: "Lele",
      role: "Barbiere",
      image: "/Lele.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale. La bellezza è nei dettagli, e io mi prendo cura di ognuno di essi.",
    },
    {
      name: "Massimo",
      role: "Barbiere",
      image: "/Massimo.jpg", // Percorso immagine
      description:
        "Innovazione e stile per un look unico e originale. Ogni cliente è un’opera d’arte, e io sono qui per perfezionarla.",
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
            <div className="h-64 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
              <p className="text-xs sm:text-sm mb-3 sm:mb-4">{barber.description}</p>
              
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
