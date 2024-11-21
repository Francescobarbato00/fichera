import React from "react";

const ContactIntroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/contatti.jpeg')", // Sostituisci con il percorso della tua immagine di sfondo
        backgroundSize: "cover", // Assicura che l'immagine riempia interamente il contenitore
        backgroundPosition: "center center", // Centra l'immagine sia orizzontalmente che verticalmente
        backgroundRepeat: "no-repeat", // Evita ripetizioni
      }}
    >
      {/* Overlay scuro per migliorare il contrasto */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
          Contattaci
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-lg sm:max-w-3xl mx-auto">
          Siamo qui per aiutarti! Inviaci le tue domande o feedback e ti
          ricontatteremo il prima possibile. Nel nostro barbershop ci impegniamo
          a offrire un servizio rapido e attento per garantire un'esperienza
          impeccabile.
        </p>
      </div>
    </div>
  );
};

export default ContactIntroSection;
