import React from "react";

const ContactIntroSection = () => {
  return (
    <div className="relative h-[70vh] lg:h-screen flex items-center justify-center">
      {/* Immagine di sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contatti.jpeg')", // Sostituisci con il percorso della tua immagine
        }}
      ></div>

      {/* Overlay scuro per migliorare il contrasto */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenuto */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl w-full px-6 sm:px-8">
        {/* Testo */}
        <div className="w-full lg:w-1/2 lg:pl-16 mt-6 sm:mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Contattaci
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 max-w-lg sm:max-w-xl mx-auto lg:mx-0">
            Siamo qui per aiutarti! Inviaci le tue domande o feedback e ti
            ricontatteremo il prima possibile. Nel nostro barbershop ci
            impegniamo a offrire un servizio rapido e attento per garantire un'esperienza
            impeccabile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactIntroSection;
