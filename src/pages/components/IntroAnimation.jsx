import React, { useState, useEffect } from "react";

export default function IntroAnimation({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Dopo 3 secondi, nascondi l'introduzione
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer); // Pulisci il timer se il componente viene smontato
  }, []);

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ease-in-out">
          <img
            src="/logo.jpg" // Assicurati che il percorso del logo sia corretto
            alt="Logo"
            className="w-48 h-48 animate-zoom-in-fade-out" // Logo più grande
          />
        </div>
      ) : (
        <div className="transition-opacity duration-1000 ease-in-out">{children}</div>
      )}
    </>
  );
}
