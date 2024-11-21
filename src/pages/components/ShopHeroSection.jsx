import React from "react";

const ShopHeroSection = () => {
  return (
    <div className="relative h-[70vh] lg:h-screen flex items-center justify-center">
      {/* Immagine di sfondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/shop.jpeg')", // Sostituisci con il percorso della tua immagine
        }}
      ></div>

      {/* Overlay scuro con maggiore opacità */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenuto */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl w-full px-6 sm:px-8">
        {/* Testo */}
        <div className="w-full lg:w-1/2 lg:pl-16 mt-6 sm:mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Più di un semplice <span className="text-yellow-500">taglio di capelli</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 mt-4 sm:mt-6">
            Il nostro barbershop è impegnato a fornire tagli di qualità e un servizio eccezionale a prezzi accessibili in un ambiente rilassante e amichevole.
          </p>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-white text-sm sm:text-lg font-semibold rounded shadow hover:bg-yellow-600 transition duration-300">
            Scopri di più
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
