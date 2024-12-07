import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderTop from "./components/HeaderTop";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

export default function Success() {
  const router = useRouter();

  // Recupera i dati dall'API o dal localStorage
  useEffect(() => {
    const sendConfirmationEmail = async () => {
      const formData = JSON.parse(localStorage.getItem("formData"));
      const cart = JSON.parse(localStorage.getItem("cart"));

      if (!formData || !cart) {
        console.error("Dati mancanti per inviare l'email.");
        return;
      }

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formData, cart }),
        });

        if (!res.ok) {
          throw new Error("Errore durante l'invio dell'email");
        }

        console.log("Email inviata con successo");
      } catch (error) {
        console.error("Errore durante l'invio dell'email:", error);
      }
    };

    sendConfirmationEmail();
  }, []);

  return (
    <>
      <HeaderTop />
      <MainHeader />

      <div className="container mx-auto py-12 px-4 sm:px-6 bg-gray-100 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-6">Pagamento completato!</h1>
          <p className="text-lg text-gray-700 mb-4">
            Grazie per il tuo ordine. Riceverai presto una conferma via email con i dettagli
            dell'acquisto.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
          >
            Torna al negozio
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
