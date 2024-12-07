import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { createClient } from "@supabase/supabase-js";

// Configurazione Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

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
    image: null,
  });

  // Controllo autenticazione lato client (backup per sessioni scadute)
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        alert("Accesso negato. Effettua il login.");
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

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

  // Caricamento immagine su Supabase Storage
  const uploadImage = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `product-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Errore nel caricamento immagine:", uploadError.message);
      throw uploadError;
    }

    const { data: signedUrlData } = await supabase.storage
      .from("product-images")
      .createSignedUrl(filePath, 604800); // URL valido per 1 settimana

    return signedUrlData.signedUrl;
  };

  // Aggiungi un prodotto
  const handleAddProduct = async () => {
    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.stock &&
      newProduct.rating &&
      newProduct.image
    ) {
      const imageUrl = await uploadImage(newProduct.image);

      await addDoc(collection(db, "products"), {
        name: newProduct.name,
        description: newProduct.description,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        rating: parseFloat(newProduct.rating),
        image: imageUrl,
      });

      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        rating: "",
        image: null,
      });

      fetchProducts();
    } else {
      alert("Compila tutti i campi richiesti e seleziona un'immagine!");
    }
  };

  // Elimina un prodotto
  const handleDeleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestione Prodotti</h1>
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
        <input
          type="text"
          placeholder="Nome"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Prezzo (€)"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2"
        />
        <input
          type="file"
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
          className="border p-2"
        />
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Aggiungi Prodotto
        </button>
      </div>

      {/* Lista prodotti */}
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center border p-2 mb-4">
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p>Prezzo: {product.price}€</p>
              <p>Stock: {product.stock}</p>
              <p>Rating: {product.rating}</p>
            </div>
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Elimina
            </button>
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
  const email = cookies
    .split("; ")
    .find((row) => row.startsWith("email="))
    ?.split("=")[1];
  const password = cookies
    .split("; ")
    .find((row) => row.startsWith("password="))
    ?.split("=")[1];

  // Verifica credenziali dal file .env.local
  if (
    email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
    password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
  ) {
    return { props: { user: { email } } };
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
