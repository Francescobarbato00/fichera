import React from "react";

const BarbershopSection = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Immagine principale */}
        <div>
          <img
            src="/df.jpg" // Cambia con il percorso corretto dell'immagine
            alt="Barbershop"
            className="rounded-md shadow-lg w-full h-auto"
          />
        </div>

        {/* Testo introduttivo */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Benvenuti</span> nel nostro Barbershop
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            Scopri un’esperienza unica nel nostro barbershop. Offriamo servizi di alta qualità
            in un ambiente accogliente e professionale, dove ogni cliente è al centro della
            nostra attenzione.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/1.svg"
                  alt="Icona 1"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Rasatura di precisione per ogni stile.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/2.svg"
                  alt="Icona 2"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Tagli di precisione per un look impeccabile.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span>
                <img
                  src="/3.svg"
                  alt="Icona 3"
                  className="w-8 h-8 sm:w-10 sm:h-10 filter-yellow"
                />
              </span>
              <p className="text-gray-600 text-sm sm:text-base">
                Trattamenti e styling con i migliori prodotti.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Icone dei servizi */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div>
          <img
            src="/1.svg"
            alt="Icona 1"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 filter-yellow"
          />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Servizi di Taglio
          </h3>
        </div>
        <div>
          <img
            src="/2.svg"
            alt="Icona 2"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 filter-yellow"
          />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Barba
          </h3>
        </div>
        <div>
          <img
            src="/3.svg"
            alt="Icona 3"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 filter-yellow"
          />
          <h3 className="text-base sm:text-lg font-bold text-gray-800">
            Styling e Acconciature
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BarbershopSection;
