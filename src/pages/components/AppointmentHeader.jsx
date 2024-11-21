import React from "react";

const AppointmentHeader = () => {
  return (
    <div className="relative h-[60vh] lg:h-[50vh] bg-cover bg-center text-white flex flex-col items-center justify-center">
      {/* Immagine di sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/appointment.jpg')", // Cambia con il percorso dell'immagine di sfondo
        }}
      ></div>

      {/* Overlay nero con trasparenza */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-yellow-500">
          Prenota Un Appuntamento
        </h2>
        <p className="mt-4 text-sm sm:text-lg text-gray-300 max-w-md sm:max-w-2xl mx-auto">
          Prenota il tuo trattamento preferito con i nostri esperti. La tua
          cura, la nostra priorità.
        </p>
      </div>
    </div>
  );
};

export default AppointmentHeader;
