import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cart } = useCart(); // Recupera il carrello dal contesto
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Invia dati all'API per il pagamento e l'email
      const res = await fetch("/api/submit-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, formData }),
      });

      if (res.ok) {
        alert("Ordine completato! Controlla la tua email.");
        router.push("/success"); // Reindirizza alla pagina di successo
      } else {
        throw new Error("Errore durante l'invio dell'ordine.");
      }
    } catch (error) {
      console.error(error);
      alert("Si è verificato un errore. Riprova.");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded px-8 py-6">
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
          Completa l'ordine
        </button>
      </form>
    </div>
  );
}
