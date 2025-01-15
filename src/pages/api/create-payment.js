import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { cart, formData } = req.body;

  try {
    console.log("Ricevuto carrello:", cart);
    console.log("Ricevuto formData:", formData);

    // Prepara i line items per Stripe Checkout
    const line_items = cart.map((item) => {
      const productData = {
        name: item.name, // Nome prodotto
      };

      // Aggiunge l'immagine solo se non è vuota
      if (item.image && item.image.trim() !== "") {
        productData.images = [item.image];
      }

      return {
        price_data: {
          currency: "eur",
          product_data: productData,
          unit_amount: Math.round((item.price + 9) * 100), // Aggiunge 9€ all'importo
        },
        quantity: item.quantity,
      };
    });

    console.log("Line Items preparati:", line_items);

    // Crea la sessione di pagamento Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: {
        email: formData.email,
        name: `${formData.name} ${formData.surname}`,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
        citofono: formData.citofono,
        interno: formData.interno,
        notes: formData.additionalNotes,
      },
    });

    console.log("Sessione Stripe creata:", session);

    // Invia l'URL della sessione di checkout
    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Errore Stripe:", error.message);
    return res.status(500).json({ message: "Errore durante la creazione della sessione di pagamento" });
  }
}
