const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // Log dei dati inviati
  console.log("Carrello inviato:", cart);
  console.log("FormData inviato:", formData);

  try {
    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, formData }),
    });

    const data = await res.json();
    console.log("Risposta dall'API:", data); // Log per vedere la risposta

    if (!data.url) {
      throw new Error("Errore durante la creazione della sessione di pagamento");
    }

    window.location.href = data.url; // Reindirizza a Stripe Checkout
  } catch (error) {
    console.error("Errore durante il pagamento:", error.message);
    alert("Si è verificato un errore. Riprova.");
  } finally {
    setLoading(false);
  }
};




import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

export default function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    citofono: "",
    interno: "",
    additionalNotes: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Salva i dati nel localStorage per usarli successivamente
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("cart", JSON.stringify(cart));

      // Crea una sessione di pagamento e ottieni l'URL di Stripe Checkout
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, formData }),
      });

      const { url } = await res.json();

      if (!url) throw new Error("Errore durante la creazione della sessione di pagamento");

      // Redirigi a Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error("Errore durante il pagamento:", error);
      alert("Si è verificato un errore. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderTop />
      <MainHeader />

      <div className="container mx-auto py-12 px-4 sm:px-6 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Inserisci i tuoi dati di spedizione
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
                />
              </div>

              <div>
                <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">
                  Cognome
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Indirizzo
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                  Città
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-gray-700 font-medium mb-2">
                  CAP
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
                />
              </div>

              <div>
                <label htmlFor="citofono" className="block text-gray-700 font-medium mb-2">
                  Citofono
                </label>
                <input
                  type="text"
                  id="citofono"
                  name="citofono"
                  value={formData.citofono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interno" className="block text-gray-700 font-medium mb-2">
                Interno/Appartamento
              </label>
              <input
                type="text"
                id="interno"
                name="interno"
                value={formData.interno}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
              />
            </div>

            <div>
              <label htmlFor="additionalNotes" className="block text-gray-700 font-medium mb-2">
                Note aggiuntive
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows="3"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-yellow-300"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className={`px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Caricamento..." : "Completa l'ordine"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
