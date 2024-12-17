import React, { useEffect, useRef, useState } from "react";

const BarbershopSection = () => {
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
      className={`py-12 sm:py-16 bg-white ${isVisible ? "" : "hidden-section"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Immagine principale */}
        <div className={isVisible ? "animate-fadeInLeft" : ""}>
          <img
            src="/df.jpg"
            alt="Barbershop"
            className="rounded-md shadow-lg w-full h-auto"
          />
        </div>

        {/* Testo introduttivo */}
        <div className={isVisible ? "animate-fadeInUp" : ""}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Benvenuti</span> nel nostro
            Barbershop
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Scopri un’esperienza unica nel nostro barbershop. Offriamo servizi
            di alta qualità in un ambiente accogliente e professionale, dove
            ogni cliente è al centro della nostra attenzione.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/1.svg"
                  alt="Icona 1"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Rasatura di precisione per ogni stile.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/2.svg"
                  alt="Icona 2"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Tagli di precisione per un look impeccabile.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/3.svg"
                  alt="Icona 3"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Trattamenti e styling con i migliori prodotti.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Icone dei servizi */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
        {["Servizi di Taglio", "Barba", "Styling e Acconciature"].map(
          (service, index) => (
            <div
              key={index}
              className={`${
                isVisible ? "animate-fadeInUp" : ""
              } delay-${index * 200}`}
            >
              <img
                src={`/${index + 1}.svg`}
                alt={`Icona ${index + 1}`}
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 filter-yellow"
              />
              <h3 className="text-base sm:text-lg font-bold text-gray-800">
                {service}
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BarbershopSection;
