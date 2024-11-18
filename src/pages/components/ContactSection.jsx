import React from "react";

const ContactSection = () => {
  return (
    <div className="py-6 px-4 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sezione Sinistra */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Siamo</span> qui per aiutarti!
          </h2>
          <p className="text-gray-700 mb-4">
            Hai domande o dubbi? Vuoi prenotare un appuntamento? Inviaci un
            messaggio compilando il modulo qui sotto.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="* Il tuo nome"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Messaggio"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition duration-300"
            >
              Invia
            </button>
          </form>
        </div>

        {/* Sezione Destra */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              <span className="text-yellow-500">Sede</span>
            </h3>
            <p className="text-gray-700">
              Via Roma, 123<br />
              Milano, Lombardia, Italia<br />
              CAP: 20121
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              <span className="text-yellow-500">Email</span>
            </h3>
            <p className="text-gray-700">
              <a
                href="mailto:info@barbershop.it"
                className="text-gray-800 hover:underline"
              >
                info@barbershop.it
              </a>
              <br />
              <a
                href="mailto:prenotazioni@barbershop.it"
                className="text-gray-800 hover:underline"
              >
                prenotazioni@barbershop.it
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              <span className="text-yellow-500">Telefono</span>
            </h3>
            <p className="text-gray-700">
              Tel: +39 02 12345678<br />
              Lun - Sab: 09:00 - 19:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
