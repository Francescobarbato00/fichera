import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Credenziali lette dalle variabili di ambiente
  const hardcodedEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const hardcodedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  // Funzione per il login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Confronto credenziali
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Salva credenziali nei cookie per controllo lato server
      document.cookie = `email=${email}; path=/`;
      document.cookie = `password=${password}; path=/`;

      alert("Login riuscito!");
      router.push("/admin"); // Reindirizza alla pagina Admin
    } else {
      setError("Credenziali errate. Riprova.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login Admin</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci email"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Inserisci password"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
