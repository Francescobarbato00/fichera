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

    // Crea i line items per ogni prodotto (senza spese di spedizione aggiunte)
    const line_items = cart.map((item) => {
      const productData = {
        name: item.name,
      };

      if (item.image && item.image.trim() !== "") {
        productData.images = [item.image];
      }

      return {
        price_data: {
          currency: "eur",
          product_data: productData,
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    // Aggiungiamo sempre la riga extra per le spese di spedizione (9€ una tantum)
    line_items.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: "Spese di spedizione",
        },
        unit_amount: Math.round(9 * 100),
      },
      quantity: 1,
    });

    console.log("Line Items preparati:", line_items);

    // Creazione della sessione di pagamento su Stripe
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

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Errore Stripe:", error.message);
    return res
      .status(500)
      .json({ message: "Errore durante la creazione della sessione di pagamento" });
  }
}
