import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";
import MainHeader from "./components/MainHeader"; // Importa l'header del sito

export default function Carrello() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      const session = await res.json();
      router.push(`https://checkout.stripe.com/pay/${session.id}`);
    } catch (error) {
      console.error("Errore durante il checkout:", error);
      alert("Si è verificato un errore. Riprova.");
    }
  };

  return (
    <>
      {/* Header del sito */}
      <MainHeader />

      <div className="container mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Il tuo carrello</h1>

        {/* Controlla se il carrello è vuoto */}
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg">Il tuo carrello è vuoto.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300"
            >
              Torna al negozio
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Lista dei prodotti nel carrello */}
            <div className="mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                      <p className="text-gray-600">Prezzo: {item.price}</p>
                      <p className="text-gray-600">Quantità: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Rimuovi
                  </button>
                </div>
              ))}
            </div>

            {/* Riepilogo Totale e Checkout */}
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gray-800">
                Totale:{" "}
                <span className="text-yellow-500">
                  {cart
                    .reduce(
                      (total, item) =>
                        total + item.quantity * parseFloat(item.price.replace("€", "")),
                      0
                    )
                    .toFixed(2)}
                  €
                </span>
              </h3>
              <button
                onClick={handleCheckout}
                className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300"
              >
                Procedi al pagamento
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
