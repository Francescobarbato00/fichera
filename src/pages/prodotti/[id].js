import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext";
import MainHeader from "../components/MainHeader";

const ProductDetails = ({ prodotto }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  if (!prodotto) return <div>Caricamento...</div>;

  const handleAddToCart = () => {
    addToCart(prodotto);
    alert("Prodotto aggiunto al carrello!");
  };

  return (
    <div>
      <MainHeader />
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-4">
          {/* Pulsante Torna Indietro */}
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:underline"
          >
            ← Torna indietro
          </button>

          {/* Pulsante Torna allo Shop */}
          <button
            onClick={() => router.push("/shop")}
            className="text-gray-500 hover:underline"
          >
            🛒 Torna allo Shop
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img src={prodotto.image} alt={prodotto.name} className="w-full" />
          <div>
            <h1 className="text-3xl font-bold">{prodotto.name}</h1>
            <p className="text-yellow-500 text-xl mt-2">{prodotto.price}€</p>
            <p className="mt-4">{prodotto.description}</p>

            {/* Pulsante Aggiungi al Carrello */}
            <button
              onClick={handleAddToCart}
              className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Aggiungi al Carrello
            </button>

            {/* Pulsante Vai al Carrello con margine aggiuntivo */}
            <div className="mt-4">
              <button
                onClick={() => router.push("/carrello")}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
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

export async function getServerSideProps({ params }) {
  const docRef = doc(db, "products", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  return { props: { prodotto: { id: docSnap.id, ...docSnap.data() } } };
}

export default ProductDetails;
