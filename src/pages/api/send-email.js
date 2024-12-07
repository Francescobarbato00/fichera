import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { formData, cart } = req.body;

  try {
    // Configura il trasportatore Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Usa il tuo indirizzo email
        pass: process.env.EMAIL_PASS, // Usa la tua password per app
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const totalAmount = cart.reduce(
      (total, item) => total + item.quantity * parseFloat(item.price.replace("€", "")),
      0
    );

    const customerEmailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #333;">Grazie per il tuo acquisto!</h1>
        <p style="color: #555;">Gentile ${formData.name} ${formData.surname},</p>
        <p style="color: #555;">
          Vi ringraziamo per aver acquistato presso il nostro negozio. Di seguito troverai il riepilogo dell'ordine:
        </p>
        <h3 style="color: #333;">Dettagli ordine:</h3>
        <ul style="color: #555;">
          ${cart
            .map(
              (item) =>
                `<li>${item.name} - Quantità: ${item.quantity} - Prezzo: ${item.price}</li>`
            )
            .join("")}
        </ul>
        <h3 style="color: #333;">Totale: ${totalAmount.toFixed(2)}€</h3>
        <p style="color: #555;">L'ordine sarà elaborato e spedito il prima possibile.</p>
        <p style="color: #555;">Cordiali saluti,</p>
        <p style="color: #333; font-weight: bold;">Il team del negozio</p>
      </div>
    `;

    const adminEmailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #333;">NUOVO ACQUISTO SUL SITO</h1>
        <p style="color: #555;">
          Un utente ha effettuato un acquisto. Di seguito i dati di fatturazione e i dettagli dell'ordine:
        </p>
        <h3 style="color: #333;">Dati di fatturazione:</h3>
        <ul style="color: #555;">
          <li><strong>Nome:</strong> ${formData.name}</li>
          <li><strong>Cognome:</strong> ${formData.surname}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Indirizzo:</strong> ${formData.address}</li>
          <li><strong>Città:</strong> ${formData.city}</li>
          <li><strong>CAP:</strong> ${formData.postalCode}</li>
        </ul>
        <h3 style="color: #333;">Dettagli ordine:</h3>
        <ul style="color: #555;">
          ${cart
            .map(
              (item) =>
                `<li>${item.name} - Quantità: ${item.quantity} - Prezzo: ${item.price}</li>`
            )
            .join("")}
        </ul>
        <h3 style="color: #333;">Totale: ${totalAmount.toFixed(2)}€</h3>
      </div>
    `;

    // Invia l'email al cliente
    await transporter.sendMail({
      from: `"Negozio" <${process.env.EMAIL_USER}>`,
      to: formData.email, // Email dell'utente
      subject: "Conferma ordine",
      html: customerEmailBody,
    });

    // Invia l'email al proprietario del sito
    await transporter.sendMail({
      from: `"Negozio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_NOTIFICATION, // Email del proprietario
      subject: "NUOVO ACQUISTO SUL SITO",
      html: adminEmailBody,
    });

    res.status(200).json({ message: "Email inviata con successo" });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    res.status(500).json({ message: "Errore durante l'invio dell'email" });
  }
}
