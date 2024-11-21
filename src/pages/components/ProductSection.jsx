import React from "react";
import { FaStar } from "react-icons/fa";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Ciotola Acciaio per Sapone da Barba",
      price: "31.00€",
      rating: 5,
      image: "/product.png",
      tag: "NUOVO",
      description: "Ciotola in acciaio inox perfetta per un'esperienza di rasatura di qualità.",
    },
    {
      id: 2,
      name: "Rasoio Dritto",
      price: "12.00€",
      rating: 4,
      image: "/product.png",
      tag: "NUOVO",
      description: "Rasoio professionale per una rasatura precisa e confortevole.",
    },
    {
      id: 3,
      name: "Forbici e Pettine",
      price: "13.00€",
      rating: 4.5,
      image: "/product.png",
      tag: "NUOVO",
      description: "Set forbici e pettine ideale per rifinire e modellare i capelli.",
    },
    {
      id: 4,
      name: "Rasoio di Sicurezza in Acciaio",
      price: "19.00€",
      rating: 5,
      image: "/product.png",
      tag: "NUOVO",
      description: "Rasoio robusto e sicuro per una rasatura classica e impeccabile.",
    },
    {
      id: 5,
      name: "Spazzola Barba in Legno",
      price: "15.00€",
      rating: 4.5,
      image: "/product.png",
      tag: "BESTSELLER",
      description: "Spazzola naturale per mantenere la barba morbida e ben curata.",
    },
    {
      id: 6,
      name: "Shampoo per Capelli e Barba",
      price: "18.00€",
      rating: 5,
      image: "/product.png",
      tag: "NOVITÀ",
      description: "Shampoo delicato per pulire e nutrire capelli e barba.",
    },
    {
      id: 7,
      name: "Olio da Barba",
      price: "20.00€",
      rating: 4.8,
      image: "/product.png",
      tag: "NUOVO",
      description: "Olio idratante per barba per un aspetto sano e lucente.",
    },
  ];

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${
            i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
          } text-sm`}
        />
      ))}
    </div>
  );

  return (
    <div id="product-section" className="py-12 sm:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          <span className="text-yellow-500">Prodotti</span> in Evidenza
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-4">
          Scopri i nostri prodotti di alta qualità per la cura dei tuoi capelli e della tua barba.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Immagine del Prodotto */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.tag}
              </div>
            </div>

            {/* Dettagli del Prodotto */}
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-yellow-500 font-bold text-lg sm:text-xl mt-2">
                {product.price}
              </p>
              <div className="mt-2">{renderStars(product.rating)}</div>
            </div>

            {/* Descrizione */}
            <div className="px-4 pb-4 text-gray-600 text-xs sm:text-sm">
              <p>{product.description}</p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Pulsante */}
            <div className="p-4">
              <button className="w-full py-2 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded hover:bg-yellow-600 transition duration-300">
                Acquista Ora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
