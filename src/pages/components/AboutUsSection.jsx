import React, { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "Esperienza Professionale",
      description:
        "I nostri barbieri hanno anni di esperienza e seguono regolarmente corsi di aggiornamento per restare al passo con le ultime tendenze del settore. Siamo specializzati in tecniche avanzate di taglio, modellatura e cura della barba, garantendo risultati che superano le aspettative.",
    },
    {
      title: "Prodotti di Qualità",
      description:
        "Per ogni servizio utilizziamo esclusivamente prodotti di alta qualità, selezionati dai migliori brand del settore. Shampoo, balsami, oli per barba e cere sono studiati per garantire massima cura e rispettare la salute del tuo cuoio capelluto e della tua pelle.",
    },
    {
      title: "Ambiente Accogliente",
      description:
        "Nel nostro barbershop troverai un ambiente caldo e accogliente, progettato per offrirti un'esperienza di relax completa. Che tu venga per un semplice taglio o per un trattamento completo, il nostro obiettivo è farti sentire a tuo agio e coccolato!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger quando il 20% della sezione è visibile
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
      className={`py-12 sm:py-16 bg-white ${
        isVisible ? "" : "hidden-section"
      }`}
    >
      {/* Titolo e Descrizione */}
      <div
        className={`text-center mb-8 sm:mb-12 px-4 ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">Chi</span> Siamo
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-lg sm:max-w-3xl mx-auto">
          Il nostro barbershop è molto più di un semplice luogo per tagliarsi i
          capelli. È uno spazio dedicato a chi desidera un servizio impeccabile,
          un luogo di fiducia dove tradizione e innovazione si incontrano per
          valorizzare il tuo stile personale.
        </p>
      </div>

      {/* Features con animazioni */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white shadow-md border border-gray-200 rounded p-4 sm:p-6 text-center ${
              isVisible ? "animate-fadeInUp" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s` }} // Ritardo per ogni elemento
          >
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
