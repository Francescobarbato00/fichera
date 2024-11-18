import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Mario Rossi",
    text: "Un taglio perfetto! Il barbiere è stato molto attento e professionale.",
    role: "Cliente",
  },
  {
    id: 2,
    name: "Luigi Bianchi",
    text: "Ambiente pulito e accogliente. Servizio eccellente e puntuale.",
    role: "Cliente",
  },
  {
    id: 3,
    name: "Carlo Verdi",
    text: "Il miglior barbershop della città! Competenza e gentilezza garantite.",
    role: "Cliente abituale",
  },
  {
    id: 4,
    name: "Francesca Neri",
    text: "Taglio capelli fantastico e un ottimo consiglio per la barba. Tornerò sicuramente!",
    role: "Cliente nuova",
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
          DICONO DI NOI
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
              <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
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
