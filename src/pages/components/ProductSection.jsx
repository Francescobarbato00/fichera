import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  // Recupera i prodotti da Firebase Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Errore nel recupero dei prodotti:", error);
      }
    };
    fetchProducts();
  }, []);

  // Funzione per generare le stelle
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
    <div id="product-section" className="py-12 bg-white">
      {/* Titolo principale */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          I nostri <span className="text-yellow-500">prodotti</span>
        </h2>
      </div>

      {/* Griglia dei prodotti */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              {/* Immagine del prodotto con fallback e lazy loading */}
              <img
                src={product.image || "/placeholder-image.png"}
                alt={product.name}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => (e.target.src = "/placeholder-image.png")}
              />

              {/* Dettagli del prodotto */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <p className="text-yellow-500 font-semibold">{product.price}€</p>
                {renderStars(product.rating || 5)}
              </div>

              {/* Pulsante Acquista */}
              <div className="p-4">
                <Link
                  href={`/prodotti/${product.id}`}
                  className="block text-center bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
                >
                  Acquista Ora
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Caricamento prodotti...</p>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
