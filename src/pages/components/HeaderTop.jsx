import React from "react";

const HeaderTop = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-center items-center text-sm md:text-base">
      <span className="text-center">
        PER PRENOTARE NEL NOSTRO BARBERSHOP CLICCA L'ICONA DI WHATSAPP |{" "}
        <a
          href="tel:0683986576" // Collegamento corretto senza spazi
          className="text-yellow-500 underline hover:text-yellow-300"
        >
          CHIAMA IL 06 8398 6576
        </a>
      </span>
    </div>
  );
};

export default HeaderTop;
