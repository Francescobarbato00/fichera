import React, { useState, useEffect } from "react";

const DynamicTextSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const services = [
    "Taglio Uomo",
    "Cura della Barba",
    "Cura Capelli",
    "Servizio Bambini",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = services[loopIndex % services.length];
      if (!deleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(currentText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setDeleting(false);
          setLoopIndex(loopIndex + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, deleting, loopIndex]);

  const scrollToSection = () => {
    const targetElement = document.getElementById("services");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-[70vh] sm:h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/shop1.jpeg')", // Sostituisci con il percorso della tua immagine
      }}
    >
      {/* Overlay nero con trasparenza */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenuto */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">
          <span className="text-yellow-500">I Nostri Trattamenti</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Con un'attenzione unica al dettaglio, offriamo un'ampia gamma di servizi per la cura del tuo stile.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 relative z-10">
        <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">
          <span>Specializzati in </span>
          <span className="relative text-yellow-500">
            {currentText}
            <span className="absolute w-1 h-5 sm:h-7 bg-yellow-500 animate-blink ml-1"></span>
          </span>
        </h3>
      </div>

      {/* Freccia verso il basso */}
      <div className="absolute bottom-4 sm:bottom-8 flex justify-center w-full">
        <button onClick={scrollToSection} className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DynamicTextSection;
