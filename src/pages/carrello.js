import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";
import MainHeader from "./components/MainHeader";

export default function Carrello() {
  const { cart, removeFromCart, decrementQuantity } = useCart();
  const router = useRouter();

  return (
    <>
      <MainHeader />
      <div className="container mx-auto py-12 px-4 sm:px-6 bg-white text-black min-h-screen">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Il tuo carrello</h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg">Il tuo carrello è vuoto.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition"
            >
              Torna al negozio
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Prezzo: {item.price}€</p>
                    <p className="text-gray-600">Quantità: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 py-1 px-2 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Rimuovi
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-6">
              <h3 className="text-xl font-bold">
                Totale:{" "}
                <span className="text-yellow-500">
                  {cart
                    .reduce(
                      (total, item) => total + item.quantity * parseFloat(item.price),
                      0
                    )
                    .toFixed(2)}
                  €
                </span>
              </h3>
              <button
                onClick={() => router.push("/checkout")}
                className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600"
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
