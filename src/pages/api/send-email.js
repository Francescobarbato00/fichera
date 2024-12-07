import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { formData, cart } = req.body;

  try {
    console.log("Ricevuto formData:", formData);
    console.log("Ricevuto carrello:", cart);

    // Configura il trasportatore Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Usa il servizio Gmail
      auth: {
        user: process.env.EMAIL_USER, // La tua email (account Gmail)
        pass: process.env.EMAIL_PASS, // Password per applicazioni
      },
      tls: {
        rejectUnauthorized: false, // Accetta connessioni TLS non sicure (evita problemi locali)
      },
    });

    // Calcola il totale dell'ordine
    const totalAmount = cart.reduce(
      (total, item) => total + item.quantity * Number(item.price),
      0
    );

    // Corpo dell'email per il cliente
    const customerEmailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #333;">Grazie per il tuo acquisto!</h1>
        <p style="color: #555;">Gentile ${formData.name} ${formData.surname},</p>
        <p style="color: #555;">
          Vi ringraziamo per aver effettuato un acquisto presso il nostro negozio.
          Di seguito trovi il riepilogo dell'ordine:
        </p>
        <h3 style="color: #333;">Dettagli Ordine:</h3>
        <ul style="color: #555;">
          ${cart
            .map(
              (item) =>
                `<li>${item.name} - Quantità: ${item.quantity} - Prezzo: ${item.price}€</li>`
            )
            .join("")}
        </ul>
        <h3 style="color: #333;">Totale: ${totalAmount.toFixed(2)}€</h3>
        <h3 style="color: #333;">Dati di Spedizione:</h3>
        <ul style="color: #555;">
          <li><strong>Indirizzo:</strong> ${formData.address}, ${formData.city}, ${formData.postalCode}</li>
          <li><strong>Telefono:</strong> ${formData.phone}</li>
          <li><strong>Citofono:</strong> ${formData.citofono || "N/A"}</li>
          <li><strong>Interno/Appartamento:</strong> ${formData.interno || "N/A"}</li>
          <li><strong>Note Aggiuntive:</strong> ${formData.additionalNotes || "Nessuna nota"}</li>
        </ul>
        <p style="color: #555;">L'ordine sarà elaborato e spedito il prima possibile.</p>
        <p style="color: #555;">Cordiali saluti,</p>
        <p style="color: #333; font-weight: bold;">Il team del negozio</p>
      </div>
    `;

    // Corpo dell'email per l'amministratore
    const adminEmailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #333;">NUOVO ACQUISTO SUL SITO</h1>
        <p style="color: #555;">
          Un utente ha effettuato un acquisto. Di seguito trovi i dettagli completi dell'ordine:
        </p>
        <h3 style="color: #333;">Dati di Fatturazione e Spedizione:</h3>
        <ul style="color: #555;">
          <li><strong>Nome:</strong> ${formData.name}</li>
          <li><strong>Cognome:</strong> ${formData.surname}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Telefono:</strong> ${formData.phone}</li>
          <li><strong>Indirizzo:</strong> ${formData.address}, ${formData.city}, ${formData.postalCode}</li>
          <li><strong>Citofono:</strong> ${formData.citofono || "N/A"}</li>
          <li><strong>Interno/Appartamento:</strong> ${formData.interno || "N/A"}</li>
          <li><strong>Note Aggiuntive:</strong> ${formData.additionalNotes || "Nessuna nota"}</li>
        </ul>
        <h3 style="color: #333;">Dettagli Ordine:</h3>
        <ul style="color: #555;">
          ${cart
            .map(
              (item) =>
                `<li>${item.name} - Quantità: ${item.quantity} - Prezzo: ${item.price}€</li>`
            )
            .join("")}
        </ul>
        <h3 style="color: #333;">Totale: ${totalAmount.toFixed(2)}€</h3>
        <p style="color: #555; margin-top: 20px;">
          <strong>Ordine effettuato da:</strong> ${formData.name} ${formData.surname} - ${formData.email} 
        </p>
      </div>
    `;

    // Invia l'email al cliente
    await transporter.sendMail({
      from: `"Negozio" <${process.env.EMAIL_USER}>`,
      to: formData.email, // Email del cliente
      subject: "Conferma Ordine - Il tuo riepilogo",
      html: customerEmailBody,
    });

    // Invia l'email all'amministratore
    await transporter.sendMail({
      from: `"Negozio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_NOTIFICATION, // Email dell'amministratore
      subject: "Nuovo Acquisto sul Sito",
      html: adminEmailBody,
    });

    res.status(200).json({ message: "Email inviata con successo" });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error.message);
    res
      .status(500)
      .json({ message: "Errore durante l'invio dell'email", error: error.message });
  }
}
