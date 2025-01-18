import React, { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/sendemailform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div ref={sectionRef} className={`py-6 px-4 sm:px-6 md:px-10 lg:px-16 bg-white ${isVisible ? "" : "hidden-section"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Sezione Sinistra */}
        <div className={isVisible ? "animate-fadeInLeft" : ""}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-yellow-500">Siamo</span> qui per aiutarti!
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Hai domande o dubbi? Inviaci un messaggio compilando il modulo qui sotto.
          </p>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="* Il tuo nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <textarea
              name="message"
              placeholder="Messaggio"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white font-semibold rounded shadow hover:bg-yellow-600 transition duration-300"
            >
              Invia
            </button>
          </form>
          {status === "loading" && <p className="text-yellow-500 mt-2">⏳ Invio in corso...</p>}
          {status === "success" && <p className="text-green-500 mt-2">✅ Email inviata con successo!</p>}
          {status === "error" && <p className="text-red-500 mt-2">❌ Errore nell'invio, riprova.</p>}
        </div>

        {/* Sezione Destra */}
        <div className={`space-y-5 ${isVisible ? "animate-fadeInRight" : ""}`}>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800"><span className="text-yellow-500">Sede</span></h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Via Alberto Moravia, 77<br />
              Roma RM, Italia<br />
              CAP: 00143
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800"><span className="text-yellow-500">Telefono</span></h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Tel: 06 8398 6576<br />
              Martedì - Sabato: 08:00 - 20:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
