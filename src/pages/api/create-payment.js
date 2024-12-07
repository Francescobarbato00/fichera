import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { cart, formData } = req.body;

  try {
    // Calcola il totale dell'importo
    const totalAmount = cart.reduce(
      (total, item) =>
        total + item.quantity * parseFloat(item.price.replace("€", "")),
      0
    );

    // Crea una sessione di pagamento Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(parseFloat(item.price.replace("€", "")) * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: {
        email: formData.email,
        name: `${formData.name} ${formData.surname}`,
        address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
      },
    });

    // Restituisci l'URL della sessione di checkout
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Errore durante la creazione della sessione di pagamento:", error);
    res.status(500).json({ message: "Errore durante il pagamento" });
  }
}
