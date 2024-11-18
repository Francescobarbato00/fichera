import React from "react";

const ContactIntroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/background.jpg')", // Sostituisci con il percorso della tua immagine di sfondo
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay scuro */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contattaci</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
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
