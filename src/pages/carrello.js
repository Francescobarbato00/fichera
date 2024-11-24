import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";
import MainHeader from "./components/MainHeader"; // Importa l'header del sito
import { useState } from "react";

export default function Carrello() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();
  const [showForm, setShowForm] = useState(false); // Stato per mostrare il form
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Evita il refresh della pagina

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, userData: formData }),
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

      <div className="container mx-auto py-12 px-4 sm:px-6 bg-white text-black min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
          Il tuo carrello
        </h1>

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
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
            {/* Lista dei prodotti nel carrello */}
            <div className="mb-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
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
                    className="text-red-500 font-semibold hover:underline mt-4 sm:mt-0"
                  >
                    Rimuovi
                  </button>
                </div>
              ))}
            </div>

            {/* Riepilogo Totale */}
            <div className="text-center sm:text-right mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
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
            </div>

            {/* Mostra il form se l'utente clicca su Procedi al pagamento */}
            {!showForm ? (
              <div className="text-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300 w-full sm:w-auto"
                >
                  Procedi al pagamento
                </button>
              </div>
            ) : (
              <form onSubmit={handlePayment} className="max-w-xl mx-auto bg-gray-50 shadow-md rounded px-8 py-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dati di fatturazione</h2>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="surname" className="block text-gray-700 font-bold mb-2">
                    Cognome
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                    Indirizzo
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                    Città
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
                    CAP
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300"
                >
                  Paga
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}
