import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per aprire/chiudere la chat
  const [messages, setMessages] = useState([]); // Stato per i messaggi
  const [input, setInput] = useState(""); // Stato per l'input dell'utente

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const botResponse = {
      text: "Ciao! Come posso aiutarti?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Icona Chat */}
      <div
        onClick={handleToggleChat}
        className="bg-black text-white p-4 rounded-full cursor-pointer shadow-lg flex items-center justify-center"
        style={{ width: "60px", height: "60px" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M20 2H4C2.89 2 2 2.89 2 4V20L6 16H20C21.11 16 22 15.11 22 14V4C22 2.89 21.11 2 20 2Z" />
        </svg>
      </div>

      {/* Finestra Chat */}
      {isOpen && (
        <div
          className="bg-white rounded-lg shadow-2xl w-96 h-96 flex flex-col"
          style={{ maxWidth: "90%", maxHeight: "85vh" }}
        >
          {/* Header della Chat */}
          <div className="bg-black text-white font-bold text-lg px-4 py-3 flex justify-between items-center rounded-t-lg">
            <span>DF BARBER SHOP ASSISTANT</span>
            <button onClick={handleToggleChat} className="text-white hover:text-gray-300">
              ✕
            </button>
          </div>

          {/* Messaggi */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-100">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-center mt-10">
                <p>Inizia una conversazione!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-xs ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 text-right">{msg.timestamp}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input della Chat */}
          <div className="border-t p-3 bg-white flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Scrivi un messaggio..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600 transition-all"
            >
              Invia
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
