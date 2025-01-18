import React from "react";

const HeaderTop = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-center items-center text-sm md:text-base">
      <span className="text-center">
        PER PRENOTARE NEL NOSTRO BARBERSHOP{" "}
        <a
          href="tel:0683986576"
          className="text-yellow-500 underline hover:text-yellow-300"
        >
          CHIAMA IL 06 8398 6576 
        </a>{" "}
        | ALTRIMENTI PRENOTA CLICCANDO {" "}
        <a
          href="https://widget.treatwell.it/salone/df-barbershop/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline hover:text-yellow-300"
        >
          QUESTO LINK
        </a>
        .
      </span>
    </div>
  );
};

export default HeaderTop;
