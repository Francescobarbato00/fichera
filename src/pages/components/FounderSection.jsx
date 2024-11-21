import React from "react";

const FounderSection = () => {
  return (
    <div className="py-12 sm:py-16 bg-white flex flex-col lg:flex-row items-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Immagine a sinistra */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <img
          src="/taglio.jpeg" // Sostituisci con il percorso della tua immagine
          alt="Barbershop"
          style={{
            width: "100%", // L'immagine si adatta automaticamente
            maxWidth: "400px", // Larghezza massima per mantenere proporzioni desktop
            height: "auto", // Altezza automatica per mantenere proporzioni
          }}
          className="shadow-md"
        />
      </div>

      {/* Contenuto a destra */}
      <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left">
        {/* Titolo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-500">Parole del Fondatore</span>
        </h2>
        {/* Testo */}
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          "Ogni cliente merita un servizio impeccabile e una cura personalizzata. La nostra missione è offrirti
          il meglio per il tuo stile e la tua immagine."
        </p>
        <p className="text-gray-800 italic font-medium">- Daniele Fichera, Fondatore</p>

        {/* Progress Bars */}
        <div className="mt-8 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
              <span className="text-gray-700 font-medium">Taglio Capelli</span>
              <span className="text-gray-800 font-bold">95%</span>
            </div>
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#e5e7eb",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "100%",
                  backgroundColor: "#fbbf24",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
              <span className="text-gray-700 font-medium">Cura della Barba</span>
              <span className="text-gray-800 font-bold">90%</span>
            </div>
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#e5e7eb",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "100%",
                  backgroundColor: "#fbbf24",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
              <span className="text-gray-700 font-medium">Servizio Bambini</span>
              <span className="text-gray-800 font-bold">85%</span>
            </div>
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#e5e7eb",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: "85%",
                  height: "100%",
                  backgroundColor: "#fbbf24",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
