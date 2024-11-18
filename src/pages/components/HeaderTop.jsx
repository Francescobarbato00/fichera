import React from "react";

const HeaderTop = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-center items-center text-sm md:text-base">
      <span className="text-center">
        PER PRENOTARE NEL NOSTRO BARBERSHOP |{" "}
        <a
          href="/Appointment"
          className="text-yellow-500 underline hover:text-yellow-300"
        >
          CLICCARE QUI
        </a>
      </span>
    </div>
  );
};

export default HeaderTop;
