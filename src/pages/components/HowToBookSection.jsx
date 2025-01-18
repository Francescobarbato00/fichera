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
            <span className="font-semibold">Accedi alla piattaforma Treatwell:</span>  
             Visita il nostro sistema di prenotazione online cliccando su{" "}
            <a
              href="https://widget.treatwell.it/salone/df-barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              questo link
            </a>.
          </li>
          <li>
            <span className="font-semibold">Scegli il servizio desiderato:</span>  
            Seleziona il trattamento che vuoi prenotare, ad esempio "Taglio Uomo" 
            o "Regolazione Barba".
          </li>
          <li>
            <span className="font-semibold">Seleziona l'operatore:</span>  
            Puoi scegliere il tuo barbiere di fiducia tra i professionisti disponibili.
          </li>
          <li>
            <span className="font-semibold">Scegli data e orario:</span>  
            Consulta la disponibilità in tempo reale e seleziona il giorno e 
            l'orario più comodi per te.
          </li>
          <li>
            <span className="font-semibold">Effettua il pagamento online:</span>  
            Conferma la tua prenotazione e, se richiesto, effettua il pagamento 
            direttamente tramite la piattaforma Treatwell per un’esperienza più comoda e veloce.
          </li>
          <li>
            <span className="font-semibold">Ricevi la conferma:</span>  
            Una volta completata la prenotazione, riceverai una conferma via email o SMS.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToBookSection;
