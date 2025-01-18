import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
  }

  try {
    // Configura il trasportatore di Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dfbarberproductshop@gmail.com", // Tua email Gmail
        pass: process.env.EMAIL_PASS, // Usa la password salvata in .env
      },
      tls: {
        rejectUnauthorized: false, // Disabilita la verifica del certificato
      },
    });

    // Formatta il contenuto dell'email
    const mailOptions = {
      from: `"Modulo Contatti DF Barber" <${email}>`,
      to: process.env.EMAIL_NOTIFICATION, // Email destinataria
      subject: "Nuova Email Ricevuta dal Sito DF Barber",
      text: `Hai ricevuto un nuovo messaggio dal sito:
      
Nome: ${name}
Email: ${email}
Messaggio:
${message}`,
      html: `
        <h2>📩 Nuova Email Ricevuta</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="color: gray;">Questa email è stata generata automaticamente dal modulo di contatto del sito DF Barber.</p>
      `,
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email inviata con successo!" });
  } catch (error) {
    console.error("Errore durante l'invio dell'email:", error);
    return res.status(500).json({ error: "Errore nell'invio dell'email. Riprova più tardi." });
  }
}
