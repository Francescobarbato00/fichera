import React, { useState } from "react";

const BookingFormSection = () => {
  const [showOtherServiceField, setShowOtherServiceField] = useState(false);

  const handleServiceChange = (event) => {
    if (event.target.value === "altro") {
      setShowOtherServiceField(true);
    } else {
      setShowOtherServiceField(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <form className="bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-5xl mx-auto">
          {/* Nome e Telefono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Il tuo nome"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Telefono *
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Il tuo numero"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          </div>

          {/* Email e Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="datetime">
                Data e Ora *
              </label>
              <div className="flex space-x-4">
                <input
                  type="date"
                  id="date"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="time"
                  id="time"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Servizio e Barbiere */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="service">
                Servizio *
              </label>
              <select
                id="service"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                onChange={handleServiceChange}
                required
              >
                <option value="">Seleziona</option>
                <option value="taglio">Taglio</option>
                <option value="barba">Barba</option>
                <option value="bambini">Bambini</option>
                <option value="altro">Altro</option>
              </select>
              {showOtherServiceField && (
                <div className="mt-4">
                  <label
                    className="block text-gray-600 mb-2"
                    htmlFor="other-service"
                  >
                    Specifica il servizio
                  </label>
                  <input
                    type="text"
                    id="other-service"
                    placeholder="Descrivi il servizio desiderato"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-600 mb-2" htmlFor="barber">
                Barbiere Preferito *
              </label>
              <select
                id="barber"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="">Seleziona</option>
                <option value="barber1">Luca</option>
                <option value="barber2">Marco</option>
                <option value="barber3">Giulia</option>
              </select>
            </div>
          </div>

          {/* Messaggio */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="message">
              Messaggio
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Richieste o informazioni aggiuntive"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          {/* Privacy e Invio */}
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="form-checkbox text-yellow-500"
                />
                <span className="text-sm text-gray-600">
                  Accetto i{" "}
                  <a href="/privacy" className="text-yellow-500 underline">
                    Termini di Servizio
                  </a>{" "}
                  e dichiaro di aver letto la{" "}
                  <a href="/privacy" className="text-yellow-500 underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 rounded shadow-lg hover:bg-yellow-600"
            >
              Invia Richiesta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormSection;
