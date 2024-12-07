import { getProducts, addProduct, updateProduct } from "@/data/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Recupera i prodotti
    return res.status(200).json(getProducts());
  }

  if (req.method === "POST") {
    // Aggiunge un nuovo prodotto
    const { name, description, price, image, stock } = req.body;
    if (!name || !description || !price || !image || !stock) {
      return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
    }
    addProduct({ name, description, price, image, stock });
    return res.status(201).json({ message: "Prodotto aggiunto con successo" });
  }

  if (req.method === "PUT") {
    // Modifica un prodotto esistente
    const { id, updatedFields } = req.body;
    updateProduct(id, updatedFields);
    return res.status(200).json({ message: "Prodotto aggiornato con successo" });
  }

  return res.status(405).json({ message: "Metodo non consentito" });
}
