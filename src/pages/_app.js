import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Toaster position="top-center" richColors />
      <Component {...pageProps} />
    </CartProvider>
  );
}
