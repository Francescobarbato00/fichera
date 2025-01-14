import React from "react";

const ShippingPolicies = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center bg-white text-black md:bg-transparent md:text-current">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Politiche di Spedizione
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Tempi di Spedizione</h2>
          <p>
            Facciamo del nostro meglio per garantire che i tuoi ordini vengano
            processati e spediti nel più breve tempo possibile. I tempi di
            spedizione standard sono generalmente compresi tra 3 e 7 giorni
            lavorativi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Costi di Spedizione</h2>
          <p>
            I costi di spedizione vengono calcolati in base al peso e alla
            destinazione dell'ordine.
          </p>
          <ul className="list-disc list-inside">
            <li>
              Spedizione standard:{" "}
              <span className="text-yellow-500">€5,00</span> per ordini
              inferiori a <span className="text-yellow-500">€50,00</span>.
            </li>
            <li>
              Spedizione gratuita per ordini superiori a{" "}
              <span className="text-yellow-500">€50,00</span>.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Tracciamento degli Ordini
          </h2>
          <p>
            Una volta che il tuo ordine è stato spedito, riceverai un'email di
            conferma con il numero di tracciamento e un link per seguire lo
            stato della consegna.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Aree di Consegna</h2>
          <p>
            Attualmente effettuiamo consegne in tutta Italia. Per spedizioni
            internazionali, ti invitiamo a contattarci prima di effettuare un
            ordine.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Problemi con la Spedizione
          </h2>
          <p>
            Se riscontri problemi con la tua spedizione, come ritardi o pacchi
            danneggiati, contattaci immediatamente. Faremo del nostro meglio per
            risolvere la situazione nel più breve tempo possibile.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Politiche di Reso</h2>
          <p>
            Nel caso in cui tu voglia restituire un prodotto, consulta la nostra
            sezione dedicata alle politiche di reso per ottenere tutte le
            informazioni necessarie.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contattaci</h2>
          <p>
            Per qualsiasi domanda relativa alle spedizioni, puoi contattarci via
            email all'indirizzo indicato in oggetto:{" "}
            <a
              href="mailto:df7barber@gmail.com"
              className="text-blue-500 underline"
            >
              df7barber@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicies;
