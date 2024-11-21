import React from "react";
import Link from "next/link";

const BookAppointment = () => {
  return (
    <div className="py-12 sm:py-16 bg-white text-center">
      <h2 className="text-xl sm:text-2xl font-medium mb-4 text-black">
        PRENOTA UN APPUNTAMENTO
      </h2>
      <p className="text-sm sm:text-md text-gray-700 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
        Siamo orgogliosi di offrire un servizio di alta qualità che inizia con la prenotazione degli appuntamenti.
        Grazie al nostro Chatbot puoi prenotare dove e quando vuoi, ti basterà consultare la pagina prenota ora. 
        
      </p>
      <div className="px-4">
        <Link href="/Appointment">
          <a>
            <button className="px-6 py-2 w-full sm:w-auto border border-black text-black font-medium uppercase hover:bg-black hover:text-white transition duration-300">
              Prenota ora
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
