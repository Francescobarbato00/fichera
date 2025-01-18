import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Numero di prodotti per pagina
  const sectionRef = useRef(null); // Riferimento alla sezione prodotti

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

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Funzione per cambiare pagina con effetto scroll in alto
  const changePage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      
      // Scorri alla sezione prodotti con animazione
      if (sectionRef.current) {
        const offsetTop = sectionRef.current.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

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
    <div id="product-section" ref={sectionRef} className="py-12 bg-white">
      {/* Titolo principale */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          I nostri <span className="text-yellow-500">prodotti</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Al momento del checkout verrà applicata una tariffa fissa di 9€ per la spedizione,  
          in linea con le tariffe standard di Poste Italiane.
        </p>
      </div>

      {/* Griglia dei prodotti */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products
              .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                >
                  {/* Immagine del prodotto */}
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

        {/* Navigazione Paginazione */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            {/* Pulsante Precedente */}
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`p-2 rounded-full ${
                currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-400 hover:bg-gray-500"
              } text-white transition`}
            >
              <FaChevronLeft />
            </button>

            {/* Pagine numerate */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => changePage(index)}
                className={`w-8 h-8 text-sm rounded-full font-semibold ${
                  currentPage === index ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-yellow-400"
                } transition`}
              >
                {index + 1}
              </button>
            ))}

            {/* Pulsante Successivo */}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full ${
                currentPage === totalPages - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-400 hover:bg-gray-500"
              } text-white transition`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
