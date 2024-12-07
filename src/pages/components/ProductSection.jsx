import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };
    fetchProducts();
  }, []);

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
    <div className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={product.image || "/placeholder-image.png"}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{product.name}</h3>
              <p className="text-yellow-500 font-semibold">{product.price}€</p>
              {renderStars(product.rating || 5)}
            </div>
            <div className="p-4">
              <Link
                href={`/prodotti/${product.id}`}
                className="block text-center bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              >
                Acquista Ora
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
