import React from "react";

const HowToBookSection = () => {
  return (
    <div className="py-10 sm:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
        {/* Titolo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          COME <span className="text-yellow-500">PRENOTARE</span>
        </h2>
      </div>

      {/* Testo Tutorial */}
      {/* Testo Tutorial */}
<div className="max-w-xl sm:max-w-3xl mx-auto text-gray-600 text-sm sm:text-lg leading-relaxed px-4 sm:px-0">
  <ol className="list-decimal list-inside space-y-4">
    <li>
      <span className="font-semibold">Chiama per prenotare:</span> 
      Per fissare un appuntamento, chiama il numero{" "}
      <a href="tel:0683986576" className="text-blue-500 font-semibold">
        06 8398 6576
      </a>.
    </li>
    <li>
      <span className="font-semibold">Indica il servizio desiderato:</span> 
      Specifica il trattamento che vorresti prenotare, ad esempio: 
      "Taglio Uomo" o "Barba".
    </li>
    <li>
      <span className="font-semibold">Comunica data e orario preferiti:</span> 
      Indica il giorno e l'orario in cui desideri fissare l'appuntamento.
      Se hai un barbiere di fiducia, puoi richiederlo durante la chiamata.
    </li>
    <li>
      <span className="font-semibold">Ricevi conferma:</span> 
      Il nostro staff ti confermerà la disponibilità e il tuo appuntamento
      sarà prenotato!
    </li>
  </ol>
</div>

    </div>
  );
};

export default HowToBookSection;
