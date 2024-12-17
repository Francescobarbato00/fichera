import React, { useEffect, useRef, useState } from "react";

const FounderSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Triggera quando il 20% della sezione è visibile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-12 sm:py-16 bg-white flex flex-col lg:flex-row items-center max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 ${
        isVisible ? "" : "hidden-section"
      }`}
    >
      {/* Immagine a sinistra */}
      <div
        className={`lg:w-1/2 mb-8 lg:mb-0 flex justify-center ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
      >
        <img
          src="/taglio.jpeg"
          alt="Barbershop"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
          }}
          className="shadow-md rounded-md"
        />
      </div>

      {/* Contenuto a destra */}
      <div
        className={`lg:w-1/2 lg:pl-8 text-center lg:text-left ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
      >
        {/* Titolo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-500">Parole del Fondatore</span>
        </h2>
        {/* Testo */}
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          "Ogni cliente merita un servizio impeccabile e una cura
          personalizzata. La nostra missione è offrirti il meglio per il tuo
          stile e la tua immagine."
        </p>
        <p className="text-gray-800 italic font-medium">
          - Daniele Fichera, Fondatore
        </p>

        {/* Progress Bars */}
        <div className="mt-8 space-y-6">
          <ProgressBar
            isVisible={isVisible}
            label="Taglio Capelli"
            percentage={95}
          />
          <ProgressBar
            isVisible={isVisible}
            label="Cura della Barba"
            percentage={90}
          />
          <ProgressBar
            isVisible={isVisible}
            label="Servizio Bambini"
            percentage={85}
          />
        </div>
      </div>
    </div>
  );
};

// Componente ProgressBar con animazione
const ProgressBar = ({ isVisible, label, percentage }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-800 font-bold">{percentage}%</span>
      </div>
      <div
        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
        style={{ borderRadius: "5px" }}
      >
        <div
          className={`h-full bg-yellow-500 rounded-full ${
            isVisible ? "animate-progress" : ""
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FounderSection;
