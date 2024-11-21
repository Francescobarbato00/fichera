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
      <div className="max-w-xl sm:max-w-3xl mx-auto text-gray-600 text-sm sm:text-lg leading-relaxed px-4 sm:px-0">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-semibold">Clicca sull'icona di WhatsApp:</span> 
            In basso a destra della pagina troverai l'icona verde di WhatsApp.
            Cliccandoci sopra, accederai automaticamente alla nostra chat.
          </li>
          <li>
            <span className="font-semibold">Inizia la conversazione:</span> 
            Scrivi un messaggio per iniziare la chat con il nostro sistema.
            Puoi anche utilizzare il messaggio precompilato che apparirà
            automaticamente.
          </li>
          <li>
            <span className="font-semibold">Indica il servizio desiderato:</span> 
            Specifica il trattamento che vorresti prenotare, ad esempio: 
            "Taglio Uomo" o "Barba".
          </li>
          <li>
            <span className="font-semibold">Indica data e preferenze:</span> 
            Comunica la giornata e l'orario preferito per il tuo appuntamento.
            Puoi anche indicare il tuo barbiere di fiducia se ne hai uno.
          </li>
          <li>
            <span className="font-semibold">Ricevi conferma:</span> 
            Il nostro sistema ti risponderà indicando la disponibilità. Una
            volta confermata, il tuo appuntamento sarà prenotato!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToBookSection;
