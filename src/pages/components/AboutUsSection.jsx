import React from "react";

const AboutUsSection = () => {
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
        "Nel nostro barbershop troverai un ambiente caldo e accogliente, progettato per offrirti un'esperienza di relax completa. Che tu venga per un semplice taglio o per un trattamento completo, il nostro obiettivo è farti sentire a tuo agio e coccolato.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">Chi</span> Siamo
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Il nostro barbershop è molto più di un semplice luogo per tagliarsi i capelli. È uno spazio
          dedicato a chi desidera un servizio impeccabile, un luogo di fiducia dove tradizione e innovazione si incontrano per valorizzare il tuo stile personale.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
