import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BookAppointment = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Attiva quando il 30% della sezione è visibile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-12 sm:py-16 bg-white text-center ${
        isVisible ? "" : "hidden-section"
      }`}
    >
      <h2
        className={`text-xl sm:text-2xl font-medium mb-4 text-black ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
      >
        PRENOTA UN APPUNTAMENTO
      </h2>
      <p
        className={`text-sm sm:text-md text-gray-700 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto leading-relaxed ${
          isVisible ? "animate-fadeIn" : ""
        }`}
      >
        Siamo orgogliosi di offrire un servizio di alta qualità che inizia con
        la prenotazione degli appuntamenti.
      </p>
      <div className={`px-4 ${isVisible ? "animate-fadeInUp" : ""}`}>
        <Link href="/Appointment" legacyBehavior>
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
