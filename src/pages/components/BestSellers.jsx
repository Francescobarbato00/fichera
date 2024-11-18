import React from "react";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image: "/7.jpg", // Cambia con il percorso della tua immagine
      title: "Crema Idratante Uomo",
      price: "14.99 EUR",
    },
    {
      id: 2,
      image: "/8.jpg", // Cambia con il percorso della tua immagine
      title: "Polvere Volumizzante MENSPIRE",
      price: "15.00 EUR",
    },
    {
      id: 3,
      image: "/9.jpg", // Cambia con il percorso della tua immagine
      title: "Spray Idratante Mini",
      price: "9.99 EUR",
    },
    {
      id: 4,
      image: "/7.jpg", // Cambia con il percorso della tua immagine
      title: "Pomata Styling Rough Stuff",
      price: "20.00 EUR",
    },
    {
      id: 5,
      image: "/8.jpg", // Cambia con il percorso della tua immagine
      title: "Set Professionale Barber",
      price: "200.00 EUR",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">
          I NOSTRI PRODOTTI
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 sm:h-64 object-contain mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 ease-in-out"></div>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-800">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
