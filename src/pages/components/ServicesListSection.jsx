import React from "react";
import { FaCut, FaMugHot, FaChild, FaPaintBrush, FaUserTie, FaSmile } from "react-icons/fa";

const ServicesListSection = () => {
  const services = [
    {
      title: "Taglio Uomo",
      price: "20€",
      description: "Un taglio classico e moderno, perfetto per ogni occasione.",
      icon: <FaCut className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Cura della Barba",
      price: "25€",
      description: "Definizione, rifinitura e cura completa per la tua barba.",
      icon: <FaMugHot className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Servizio Bambini",
      price: "15€",
      description: "Tagli di capelli pensati appositamente per i più piccoli.",
      icon: <FaChild className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Styling Capelli",
      price: "30€",
      description: "Styling personalizzato per un look unico e originale.",
      icon: <FaPaintBrush className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Pulizia Viso Uomo",
      price: "42€",
      description: "Trattamenti rigeneranti per una pelle fresca e luminosa.",
      icon: <FaUserTie className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Sorrisi Garantiti",
      price: "18€",
      description: "Lasciati coccolare dai nostri esperti in un ambiente accogliente.",
      icon: <FaSmile className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    // Section with id="services" for anchoring
    <div className="py-16 bg-white" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">I Nostri</span> Servizi
        </h2>
        <p className="text-gray-600 mt-4">
          Scopri la nostra gamma di servizi, creati per soddisfare ogni esigenza con professionalità e cura.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center p-6 border border-gray-200 rounded-lg shadow-lg"
          >
            {/* Icona del servizio */}
            <div className="mr-6">{service.icon}</div>
            {/* Dettagli del servizio */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
              <span className="text-yellow-500 font-bold text-lg mt-4 block">
                {service.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesListSection;
