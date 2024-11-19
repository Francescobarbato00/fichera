import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "R. Capasso",
    text: "Personale molto alla mano e disponibile, subito si sono mostrati accoglienti e competenti, pronti a fornire un ottimo servizio per taglio sia di capelli e che di barba. Ci tornerò.",
  },
  {
    id: 2,
    name: "Susan Conway",
    text: "Ci sono andato 3 settimane fa e mi hanno fatto un taglio veramente perfetto e persone veramente educate e rispettose.",
  },
  {
    id: 3,
    name: "Valpaogiu Porlai",
    text: "Daniele e il Maestro sono sempre cordiali e disponibili nonché molto bravi nel loro lavoro. Ora anche supportati da diversi aiuti. Trattamento barba e capelli rilassante con panno caldo / freddo e massaggio. Un’ora di relax sempre gradita. Bravi.",
  },
  {
    id: 4,
    name: "Fabio Pascarella",
    text: "Con la prenotazione zero attesa. Daniele top! Tornerò sicuramente.",
  },
  {
    id: 5,
    name: "Valentina Visconti",
    text: "Ottimo rapporto qualità prezzo. Daniele ed il suo staff sono bravissimi, cordiali e disponibili. Il locale è sempre pulito e ben frequentato. Mio figlio oramai adora Daniele e si fa tagliare i capelli solo da lui. Daniele lavora con il nonno, un bellissimo messaggio familiare.",
  },
  {
    id: 6,
    name: "Ferruccio Trastullo",
    text: "Taglio moderno, ambiente stupendo. Personale fantastico. Ogni volta che mi siedo sulla poltrona perdo i sensi... Normalmente barba e capelli. Il balsamo per l'anima è incluso.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Cambia recensione ogni 5 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Titolo */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-black">
          DICO DI<span className="text-yellow-500"> NOI</span>
        </h2>

        {/* Contenuto delle recensioni */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10">
          {/* Apertura di virgolette */}
          <div className="relative text-4xl sm:text-6xl text-gray-300 leading-none mb-4 sm:mb-0">
            &#8220; {/* Grande apertura di virgolette */}
          </div>

          {/* Testo della recensione */}
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg italic text-gray-700">
              {reviews[currentIndex].text}
            </p>
            <div className="mt-6">
              <h4 className="text-base sm:text-lg font-bold text-black">
                {reviews[currentIndex].name}
              </h4>
            </div>
          </div>

          {/* Chiusura di virgolette */}
          <div className="relative text-4xl sm:text-6xl text-gray-300 leading-none mt-4 sm:mt-0">
            &#8221; {/* Grande chiusura di virgolette */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
