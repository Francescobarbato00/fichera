import React, { useState, useEffect, useRef } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const chatRef = useRef(null);

  const welcomeMessage = { text: "Ciao! 👋 Come posso aiutarti oggi?", sender: "bot" };

  // Mostra il messaggio iniziale quando il chatbot si apre
  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setChatMessages([welcomeMessage]); // Imposta il messaggio iniziale solo la prima volta
      setFadeIn(true);
    }
  };

  const handleUserMessage = (question) => {
    let answer = "";

    switch (question) {
      case "Dove ci troviamo?":
        answer =
          "📍 La nostra sede si trova in **Via Alberto Moravia, 77, Roma RM, Italia** (CAP: 00143). Ti aspettiamo! 😊";
        break;
      case "I nostri orari?":
        answer =
          "⏰ Siamo aperti **dal Martedì al Sabato, dalle 08:00 alle 20:00**. Vieni a trovarci per un'esperienza unica! ✂️";
        break;
        case "Come prenotare?":
          answer =
            "📅 Per prenotare un appuntamento, puoi **chiamarci al numero 06 8398 6576** oppure **prenotare online** scegliendo servizio, operatore, data e ora direttamente su Treatwell: https://widget.treatwell.it/salone/df-barbershop/. Ti aspettiamo! 🚀";
          break;
      default:
      
        answer = "Mi dispiace, non ho capito la domanda. Prova a selezionare un'opzione!";
    }

    setFadeIn(false); // Reset animazione
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { text: question, sender: "user" },
        { text: answer, sender: "bot" },
      ]);
      setFadeIn(true); // Attiva l'effetto dopo aver aggiornato i messaggi
    }, 100);
  };

  // Auto-scroll alla fine della chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Icona della Chat */}
      <div
        onClick={handleToggleChat}
        className="bg-yellow-500 text-white p-4 rounded-full cursor-pointer shadow-lg flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:rotate-12"
        style={{ width: "60px", height: "60px" }}
      >
        <FaCommentDots className="h-6 w-6" />
      </div>

      {/* Finestra della Chat */}
      {isOpen && (
        <div className="bg-white w-80 max-w-full rounded-lg shadow-lg fixed bottom-20 right-4 border border-gray-300 md:w-96">
          <div className="bg-yellow-500 text-white p-3 font-bold text-center rounded-t-lg">
            ChatBot
          </div>
          <div ref={chatRef} className="p-3 h-60 max-h-72 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 text-sm rounded-lg transition-opacity duration-500 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                } ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-left text-black md:text-gray-800" // Testo nero su mobile, grigio su desktop
                    : "bg-yellow-500 text-white text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Pulsanti di scelta rapida */}
          <div className="p-3 border-t border-gray-200">
            {["Dove ci troviamo?", "I nostri orari?", "Come prenotare?"].map((question, index) => (
              <button
                key={index}
                onClick={() => handleUserMessage(question)}
                className="bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm w-full mb-2"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
