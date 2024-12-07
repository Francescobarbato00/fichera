import { createContext, useContext, useEffect, useState } from "react";

// Crea il contesto del carrello
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Carica i dati del carrello da localStorage al primo render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salva il carrello nel localStorage ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Aggiunge un prodotto al carrello o aggiorna la quantità
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Incrementa la quantità se il prodotto è già nel carrello
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Aggiunge un nuovo prodotto al carrello
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Rimuove un prodotto dal carrello
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Decrementa la quantità di un prodotto
  const decrementQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Rimuove se la quantità arriva a 0
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
