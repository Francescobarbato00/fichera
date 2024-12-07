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
    <div className="bg-white text-black min-h-screen">
      <MainHeader />
      <div className="container mx-auto p-4 md:p-6">
        {/* Pulsanti di navigazione */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:underline"
          >
            ← Torna indietro
          </button>

          <button
            onClick={() => router.push("/shop")}
            className="text-gray-500 hover:underline"
          >
            🛒 Torna allo Shop
          </button>
        </div>

        {/* Griglia responsiva per immagine e dettagli */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Immagine del prodotto */}
          <img
            src={prodotto.image}
            alt={prodotto.name}
            className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg"
          />

          {/* Dettagli del prodotto */}
          <div className="w-full text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold">{prodotto.name}</h1>
            <p className="text-yellow-500 text-xl mt-2">{prodotto.price}€</p>
            <p className="mt-4 text-base lg:text-lg">{prodotto.description}</p>

            {/* Pulsante Aggiungi al Carrello */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full lg:w-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
            >
              Aggiungi al Carrello
            </button>

            {/* Pulsante Vai al Carrello */}
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

export async function getServerSideProps({ params }) {
  const docRef = doc(db, "products", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  return { props: { prodotto: { id: docSnap.id, ...docSnap.data() } } };
}

export default ProductDetails;
