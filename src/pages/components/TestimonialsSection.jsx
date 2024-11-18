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
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Titolo */}
        <h2 className="text-3xl font-bold mb-10">DICONO DI NOI</h2>

        {/* Contenuto delle recensioni */}
        <div className="flex justify-center space-x-10">
          <div className="relative text-6xl text-gray-300 leading-none">
            &#8220; {/* Grande apertura di virgolette */}
          </div>
          <div>
            <p className="text-lg italic text-gray-700">
              {reviews[currentIndex].text}
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-bold">{reviews[currentIndex].name}</h4>
              <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
            </div>
          </div>
          <div className="relative text-6xl text-gray-300 leading-none">
            &#8221; {/* Grande chiusura di virgolette */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
