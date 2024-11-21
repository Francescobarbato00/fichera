import { useRouter } from "next/router";
import { useCart } from "@/context/CartContext"; // Importa il contesto del carrello
import MainHeader from "../components/MainHeader"; // Importa l'header del sito

const ProductDetails = ({ prodotto }) => {
  const router = useRouter();
  const { addToCart } = useCart(); // Usa la funzione "addToCart" dal contesto del carrello

  if (router.isFallback) {
    return <div>Caricamento...</div>;
  }

  const handleAddToCart = () => {
    addToCart(prodotto); // Aggiungi il prodotto al carrello
    alert("Prodotto aggiunto al carrello!");
  };

  const goToCart = () => {
    router.push("/carrello"); // Vai alla pagina del carrello
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header del sito */}
      <MainHeader />

      <div className="container mx-auto py-12 px-4 sm:px-6">
        {/* Pulsante per tornare indietro */}
        <button
          className="mb-6 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
          onClick={() => router.back()}
        >
          ← Torna indietro
        </button>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Immagine del prodotto */}
          <div className="lg:w-1/2">
            <img
              src={prodotto.image}
              alt={prodotto.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dettagli del prodotto */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{prodotto.name}</h1>
              <p className="text-yellow-500 text-3xl font-semibold mt-4">
                {prodotto.price}
              </p>
              <p className="text-gray-600 text-lg mt-4">{prodotto.description}</p>

              {/* Testo riempitivo */}
              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ullamcorper nisl vel nisl tristique, at aliquam enim vehicula.
                Integer convallis ligula non nulla gravida, vel tempor nisi
                commodo. Sed vitae eros sit amet est mattis euismod id sit amet
                magna.
              </p>
            </div>

            {/* Pulsanti Aggiungi al Carrello e Vai al Carrello */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300"
              >
                Aggiungi al carrello
              </button>
              <button
                onClick={goToCart}
                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded hover:bg-gray-900 transition duration-300"
              >
                Vai al carrello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const products = [
    {
      id: 1,
      name: "Ciotola Acciaio per Sapone da Barba",
      price: "31.00€",
      description:
        "Ciotola in acciaio inox perfetta per un'esperienza di rasatura di qualità.",
      image: "/product.png",
      tag: "NUOVO",
    },
    {
      id: 2,
      name: "Rasoio Dritto",
      price: "12.00€",
      description:
        "Rasoio professionale per una rasatura precisa e confortevole.",
      image: "/product.png",
      tag: "NUOVO",
    },
    {
      id: 3,
      name: "Forbici e Pettine",
      price: "13.00€",
      description:
        "Set forbici e pettine ideale per rifinire e modellare i capelli.",
      image: "/product.png",
      tag: "NUOVO",
    },
  ];

  const prodotto = products.find((p) => p.id.toString() === params.id);

  if (!prodotto) {
    return {
      notFound: true,
    };
  }

  return {
    props: { prodotto },
  };
}

export default ProductDetails;
