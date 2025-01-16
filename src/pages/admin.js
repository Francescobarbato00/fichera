import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Admin({ user }) {
  const router = useRouter();

  // Stato per i prodotti
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    rating: "",
    image: "",
  });

  // Recupera i prodotti
  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const productList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Aggiungi un prodotto
  const handleAddProduct = async () => {
    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.stock &&
      newProduct.rating &&
      newProduct.image
    ) {
      await addDoc(collection(db, "products"), {
        name: newProduct.name,
        description: newProduct.description,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        rating: parseFloat(newProduct.rating),
        image: newProduct.image,
      });

      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        rating: "",
        image: "",
      });

      fetchProducts();
    } else {
      alert("Compila tutti i campi richiesti!");
    }
  };

  // Elimina un prodotto
  const handleDeleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  // Aggiorna un prodotto (Prezzo e Stock)
  const handleUpdateProduct = async (id, updatedFields) => {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, updatedFields);
    fetchProducts();
  };

  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4 text-black">Gestione Prodotti</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Torna alla Home
        </button>
        <button
          onClick={() => router.push("/shop")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Torna allo Shop
        </button>
      </div>

      {/* Form per aggiungere un prodotto */}
      <div className="mb-4 flex flex-col gap-2">
        <input type="text" placeholder="Nome" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border p-2" />
        <input type="text" placeholder="Descrizione" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="border p-2" />
        <input type="number" placeholder="Prezzo (€)" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="border p-2" />
        <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} className="border p-2" />
        <input type="number" placeholder="Rating" value={newProduct.rating} onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })} className="border p-2" />
        <input type="text" placeholder="URL Immagine" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="border p-2" />
        <button onClick={handleAddProduct} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Aggiungi Prodotto</button>
      </div>

      {/* Lista prodotti */}
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center border p-2 mb-4">
            <div>
              <h3 className="font-bold text-black">{product.name}</h3>
              <p>Prezzo: <input type="number" value={product.price} onChange={(e) => setProducts((prev) => prev.map((p) => p.id === product.id ? { ...p, price: parseFloat(e.target.value) } : p))} className="border p-1 ml-2 w-20" /> €</p>
              <p>Stock: <input type="number" value={product.stock} onChange={(e) => setProducts((prev) => prev.map((p) => p.id === product.id ? { ...p, stock: parseInt(e.target.value) } : p))} className="border p-1 ml-2 w-20" /></p>
              <p>Rating: {product.rating}</p>
            </div>
            <img src={product.image || "https://via.placeholder.com/150"} alt={product.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex gap-2">
              <button onClick={() => handleUpdateProduct(product.id, { price: product.price, stock: product.stock })} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">Salva Modifiche</button>
              <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Elimina</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Protezione lato server con credenziali da env
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || "";
  const email = cookies.split("; ").find((row) => row.startsWith("email="))?.split("=")[1];
  const password = cookies.split("; ").find((row) => row.startsWith("password="))?.split("=")[1];

  if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return { props: { user: { email } } };
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
