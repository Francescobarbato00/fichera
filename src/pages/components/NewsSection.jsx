import React from "react";

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      image: "/4.jpg", // Cambia con il percorso dell'immagine
      title: "La squadra del barbershop",
      description:
        "Scopri il nostro team di professionisti e la loro passione per la cura del tuo stile. Ogni taglio è un'opera d'arte.",
      link: "#",
    },
    {
      id: 2,
      image: "/5.jpg", // Cambia con il percorso dell'immagine
      title: "Trattamenti per capelli",
      description:
        "Offriamo trattamenti personalizzati per capelli sani e forti. Lasciati coccolare dai nostri esperti.",
      link: "#",
    },
    {
      id: 3,
      image: "/6.jpg", // Cambia con il percorso dell'immagine
      title: "Cura della barba",
      description:
        "La tua barba, il nostro impegno. Dai prodotti specifici ai trattamenti di precisione, pensiamo a tutto noi.",
      link: "#",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">NEWS</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {articles.map((article) => (
          <div key={article.id} className="text-center">
            {/* Immagine */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 sm:h-64 object-cover mb-4"
            />
            {/* Testo sotto l'immagine */}
            <div className="bg-white p-4">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-500 mt-4 inline-block text-sm font-medium hover:underline"
              >
                Leggi di più →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
