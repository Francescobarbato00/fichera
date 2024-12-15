import React from "react";
import { FaCut, FaMugHot, FaChild, FaPaintBrush, FaUserTie } from "react-icons/fa";

const ServicesListSection = () => {
  const services = [
    {
      title: "Taglio Uomo",
      price: "20€",
      description: "Un taglio classico e moderno, perfetto per ogni occasione, completo di shampoo, rifiniture precise e cura del dettaglio.",
      icon: <FaCut className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    
    {
      title: "Barba con Panno",
      price: "15€",
      description: "Definizione, taglio, rifinitura e cura completa per la tua barba, con particolare attenzione alla salute e alla nutrizione del follicolo.",
      icon: <FaMugHot className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    
    {
      title: "Barba Modellata",
      price: "10€",
      description: "Definizione, taglio, rifinitura e cura completa per la tua barba, con particolare attenzione alla salute e alla nutrizione del follicolo.",
      icon: <FaMugHot className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    
    
    {
      title: "Taglio Bambino (fino a 7 anni)",
      price: "15€",
      description: "Un trattamento completo con panno caldo e freddo, massaggio facciale profumato, oli nutrienti, balsami e una rasatura impeccabile per un look fresco e curato.",
      icon: <FaChild className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Sopracciglia",
      price: "5€",
      description: "Taglio e definizione delle sopracciglia per un look curato e armonioso, con uno styling personalizzato che esalta la tua unicità.",
      icon: <FaPaintBrush className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Skin Care",
      price: "10€",
      description: "Trattamento rigenerante con maschera viso per una pelle fresca, luminosa e ben idratata, ideale per rilassare e rivitalizzare.",
      icon: <FaUserTie className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Barba + Skin Care",
      price: "20€",
      description: "Trattamento rigenerante con maschera viso per una pelle fresca, luminosa e ben idratata, ideale per rilassare e rivitalizzare.",
      icon: <FaUserTie className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Tricocamera",
      price: "10€",
      description: "Trattamento rigenerante con maschera viso per una pelle fresca, luminosa e ben idratata, ideale per rilassare e rivitalizzare.",
      icon: <FaUserTie className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Tricocamera + Pulizia",
      price: "15€",
      description: "Trattamento rigenerante con maschera viso per una pelle fresca, luminosa e ben idratata, ideale per rilassare e rivitalizzare.",
      icon: <FaUserTie className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
    {
      title: "Pulizia della Cute",
      price: "10€",
      description: "Trattamento rigenerante con maschera viso per una pelle fresca, luminosa e ben idratata, ideale per rilassare e rivitalizzare.",
      icon: <FaUserTie className="text-yellow-500 text-3xl sm:text-4xl" />,
    },
 
  ];

  const extraServices = [
    { title: "Permanente", description: "Trattamento professionale per creare ricci definiti, elastici e duraturi, donando volume e stile personalizzato ai tuoi capelli." },
    { title: "Decolorazione", description: "Trattamento di decolorazione per schiarire i capelli, creando una base perfetta per un look rinnovato e luminoso." },
    { title: "Tiraggio", description: "Trattamento professionale di tiraggio per lisciare e allungare i capelli, donando morbidezza e un aspetto elegante." },
    { title: "Treccine", description: "Acconciature in treccine realizzate con precisione per un look unico ed elegante, perfetto per ogni occasione." },
    { title: "Colori", description: "Servizio di colorazione completa o riflessi personalizzati, per esaltare il tuo stile con tonalità vivaci e luminose." },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white" id="services">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">I Nostri</span> Servizi
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
          Scopri la nostra gamma di servizi, creati per soddisfare ogni esigenza con professionalità e cura
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mr-4 sm:mr-6">{service.icon}</div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
              <span className="text-yellow-500 font-bold text-base sm:text-lg mt-4 block">
                {service.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Servizi Extra */}
      <div className="text-center mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">Servizi</span> Extra
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 mt-8">
        {extraServices.map((service, index) => (
          <div
            key={index}
            className="flex items-center p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mr-4 sm:mr-6">
              <FaPaintBrush className="text-yellow-500 text-3xl sm:text-4xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesListSection;
