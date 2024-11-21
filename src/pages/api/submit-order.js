import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cart, formData } = req.body;

    try {
      // Configurazione di Nodemailer
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Puoi usare anche altri provider (es. Outlook, SMTP)
        auth: {
          user: process.env.EMAIL_USER, // Inserisci la tua email
          pass: process.env.EMAIL_PASS, // Inserisci la password
        },
      });

      // Formatta l'email
      const cartItems = cart
        .map(
          (item) =>
            `<li>${item.name} - ${item.quantity}x - ${item.price}</li>`
        )
        .join("");

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Dove inviare l'email (può essere la tua email)
        subject: "Nuovo ordine ricevuto",
        html: `
          <h2>Dettagli del Cliente</h2>
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Cognome:</strong> ${formData.surname}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Indirizzo:</strong> ${formData.address}</p>
          <p><strong>Città:</strong> ${formData.city}</p>
          <p><strong>CAP:</strong> ${formData.postalCode}</p>

          <h2>Prodotti Ordinati</h2>
          <ul>${cartItems}</ul>
        `,
      };

      // Invia l'email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Ordine inviato con successo!" });
    } catch (error) {
      console.error("Errore nell'invio dell'email:", error);
      res.status(500).json({ error: "Errore durante l'invio dell'ordine." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Metodo non consentito");
  }
}
