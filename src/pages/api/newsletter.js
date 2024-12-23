import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email non fornita" });
  }

  try {
    // Configura il trasportatore Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // La tua email
        pass: process.env.EMAIL_PASS, // Password per applicazioni
      },
      tls: {
        rejectUnauthorized: false, // Evita problemi di certificati locali
      },
    });

    // Corpo dell'email
    const emailBody = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h1 style="color: #333;">Nuovo Iscritto alla Newsletter</h1>
        <p style="color: #555;">Un nuovo utente si è iscritto alla newsletter:</p>
        <p style="color: #333; font-size: 16px;"><strong>Email:</strong> ${email}</p>
      </div>
    `;

    // Invia l'email all'amministratore
    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,
      to: "francesco.barbato24@gmail.com", // Email amministratore
      subject: "Nuovo Iscritto alla Newsletter",
      html: emailBody,
    });

    res.status(200).json({ message: "Iscrizione alla newsletter completata con successo" });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error.message);
    res.status(500).json({ message: "Errore durante l'invio dell'email", error: error.message });
  }
}
