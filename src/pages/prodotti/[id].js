import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext";
import MainHeader from "../components/MainHeader";
import { toast } from "sonner";

const ProductDetails = ({ prodotto }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  if (!prodotto) return <div>Caricamento...</div>;

  const handleAddToCart = () => {
    addToCart(prodotto);
    toast.success("Prodotto aggiunto al carrello!", {
      description: "Puoi visualizzare i dettagli nel carrello.",
    });
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <MainHeader />
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex justify-between mb-6">
          <button onClick={() => router.back()} className="text-gray-500 hover:underline">
            ← Torna indietro
          </button>
          <button onClick={() => router.push("/shop")} className="text-gray-500 hover:underline">
            🛒 Torna allo Shop
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <img src={prodotto.image} alt={prodotto.name} className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
          <div className="w-full text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold">{prodotto.name}</h1>
            <p className="text-yellow-500 text-xl mt-2">{prodotto.price}€</p>
            <p className="mt-4 text-base lg:text-lg">{prodotto.description}</p>
            
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full lg:w-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
            >
              Aggiungi al Carrello
            </button>
            <div className="mt-4">
              <button
                onClick={() => router.push("/carrello")}
                className="w-full lg:w-auto bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
              >
                Vai al Carrello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🛠 Pre-genera tutte le pagine prodotto al momento della build
export async function getStaticPaths() {
  const snapshot = await getDocs(collection(db, "products"));
  const paths = snapshot.docs.map((doc) => ({
    params: { id: doc.id },
  }));

  return { paths, fallback: "blocking" };
}

// 🛠 Recupera i dati del prodotto in fase di build
export async function getStaticProps({ params }) {
  const docRef = doc(db, "products", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  return {
    props: { prodotto: { id: docSnap.id, ...docSnap.data() } },
    revalidate: 60, // Aggiorna la cache ogni 60 secondi
  };
}

export default ProductDetails;
