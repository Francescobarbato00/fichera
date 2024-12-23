import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Informativa sui Rimborsi</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Condizioni per il Rimborso</h2>
          <p>
            Ci impegniamo a garantire la soddisfazione dei nostri clienti. I rimborsi sono disponibili
            nei seguenti casi:
          </p>
          <ul className="list-disc list-inside">
            <li>Il prodotto è stato ricevuto danneggiato o difettoso.</li>
            <li>Il prodotto ricevuto non corrisponde all'ordine effettuato.</li>
            <li>Il reso è stato richiesto entro 14 giorni dalla data di consegna.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Procedura per Richiedere un Rimborso</h2>
          <p>
            Per avviare la procedura di rimborso, segui questi passaggi:
          </p>
          <ul className="list-decimal list-inside">
            <li>Contattaci via email all'indirizzo <a href="mailto:df7barber@gmail.com" className="text-blue-500 underline">df7barber@gmail.com</a> indicando il problema riscontrato.</li>
            <li>Fornisci una prova d'acquisto, come la ricevuta o il numero d'ordine.</li>
            <li>Se richiesto, invia foto del prodotto danneggiato o difettoso.</li>
            <li>Attendi le istruzioni per procedere con il reso, se applicabile.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Modalità di Rimborso</h2>
          <p>
            Una volta approvata la richiesta di rimborso, procederemo con il rimborso utilizzando
            il metodo di pagamento originale entro 5-7 giorni lavorativi. Ti invieremo una conferma
            via email quando il rimborso sarà stato completato.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Eccezioni</h2>
          <p>
            Non possiamo accettare richieste di rimborso nei seguenti casi:
          </p>
          <ul className="list-disc list-inside">
            <li>Prodotti utilizzati o non restituiti nelle condizioni originali.</li>
            <li>Richieste effettuate oltre i 14 giorni dalla data di consegna.</li>
            <li>Prodotti acquistati in saldo o in promozione, salvo diversa indicazione.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Spese di Reso:</h2>
          <p>
            Le spese di spedizione per il reso sono a carico del cliente, salvo nei casi in cui
            il prodotto ricevuto sia stato danneggiato o difettoso.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contattaci</h2>
          <p>
            Per qualsiasi domanda o richiesta di chiarimento relativa alla nostra politica sui rimborsi,
            contattaci via email all'indirizzo: <a href="mailto:df7barber@gmail.com" className="text-blue-500 underline">df7barber@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
