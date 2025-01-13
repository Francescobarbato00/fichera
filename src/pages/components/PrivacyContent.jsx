import React from "react";

const PrivacyContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center bg-white text-black md:bg-transparent md:text-current">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Politica di Privacy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduzione</h2>
          <p>
            La tua privacy è importante per noi. Questa politica di privacy descrive
            come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando
            visiti il nostro sito web o utilizzi i nostri servizi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Informazioni che Raccogliamo</h2>
          <ul className="list-disc list-inside">
            <li>Dati personali forniti direttamente dall'utente, come nome, email e numero di telefono.</li>
            <li>Informazioni raccolte automaticamente, come indirizzi IP e dati di navigazione.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Come Utilizziamo i Dati</h2>
          <p>Utilizziamo i tuoi dati personali per:</p>
          <ul className="list-disc list-inside">
            <li>Fornire i nostri servizi e gestire le tue richieste.</li>
            <li>Migliorare l'esperienza utente e personalizzare i contenuti.</li>
            <li>Inviare comunicazioni di marketing, previo consenso.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Protezione dei Dati</h2>
          <p>
            Adottiamo misure tecniche e organizzative per garantire la sicurezza dei tuoi dati
            personali e prevenire accessi non autorizzati, perdite o alterazioni.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Condivisione dei Dati</h2>
          <p>
            Non condividiamo i tuoi dati personali con terze parti, salvo nei casi richiesti
            dalla legge o con il tuo consenso esplicito.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Diritti dell'Utente</h2>
          <p>Hai il diritto di:</p>
          <ul className="list-disc list-inside">
            <li>Accedere, correggere o eliminare i tuoi dati personali.</li>
            <li>Revocare il consenso al trattamento dei dati.</li>
            <li>Presentare un reclamo all'autorità di controllo per la privacy.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Modifiche alla Politica di Privacy</h2>
          <p>
            Ci riserviamo il diritto di aggiornare questa politica di privacy in qualsiasi
            momento. Ti invitiamo a controllare periodicamente questa pagina per eventuali
            modifiche.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contattaci</h2>
          <p>
            Per domande o richieste relative alla nostra politica di privacy, puoi
            contattarci all'indirizzo email:{" "}
            <a href="mailto:df7barber@gmail.com" className="text-blue-500 underline">
              df7barber@gmail.com
            </a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Dati degli Utenti</h2>
          <p>
            Se ci fornisci i tuoi dati personali per acquistare prodotti o accedere ai nostri servizi, ti assicuriamo
            che verranno trattati con la massima cura e nel rispetto della normativa vigente sulla privacy.
          </p>
          <p>Questi dati potrebbero includere:</p>
          <ul className="list-disc list-inside">
            <li>Nome e cognome.</li>
            <li>Indirizzo email e numero di telefono.</li>
            <li>Indirizzo per la consegna dei prodotti.</li>
            <li>Dettagli relativi agli acquisti effettuati.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyContent;
