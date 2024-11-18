import React from "react";

const BookAppointment = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-2xl font-medium mb-4">PRENOTA UN APPUNTAMENTO</h2>
      <p className="text-md text-gray-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
        Siamo orgogliosi di offrire un servizio di alta qualità che inizia con la prenotazione degli appuntamenti.
        Il nostro sistema online ti permette di scegliere uno stilista e un orario che siano comodi per te. 
        E se non puoi presentarti, puoi riprogrammare entro 24 ore dall'appuntamento.
      </p>
      <button className="px-6 py-2 border border-black text-black font-medium uppercase hover:bg-black hover:text-white transition duration-300">
        Prenota ora
      </button>
    </div>
  );
};

export default BookAppointment;
