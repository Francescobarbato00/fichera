import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, description, price, stock, image } = req.body;

      if (!name || !description || !price || !stock || !image) {
        return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
      }

      // Converti base64 o URL in un file e caricalo su Firebase Storage
      const response = await fetch(image);
      const blob = await response.blob();
      const storageRef = ref(storage, `products/${Date.now()}-${name}.jpg`);
      await uploadBytes(storageRef, blob);

      // Ottieni l'URL dell'immagine
      const imageUrl = await getDownloadURL(storageRef);

      // Aggiungi il prodotto a Firestore con il nuovo URL dell'immagine
      const docRef = await addDoc(collection(db, "products"), {
        name,
        description,
        price,
        stock,
        image: imageUrl, // Salviamo l'URL su Firestore
      });

      res.status(201).json({ id: docRef.id, message: "Prodotto aggiunto con successo" });
    } catch (error) {
      console.error("Errore durante il caricamento del prodotto:", error);
      res.status(500).json({ message: "Errore nel caricamento del prodotto" });
    }
  } else {
    res.status(405).json({ message: "Metodo non consentito" });
  }
}
