import React from "react";

const WorkingHoursSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* Mappa a schermo intero sulla sinistra */}
      <div className="w-full h-64 sm:h-96 md:w-1/2 md:h-auto">
        <iframe
          title="Barbershop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.9279300472715!2d12.486313515540315!3d41.8205479792288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258a76207005d9%3A0x3b1234c8903e4230!2sVia%20Alberto%20Moravia%2C%2077%2C%2000143%20Roma%20RM%2C%20Italia!5e0!3m2!1sit!2sit!4v1678739602835!5m2!1sit!2sit"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Testo sulla destra */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-500">Siamo</span> Aperti
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Vieni a trovarci durante gli orari di apertura. Siamo sempre pronti a
          offrirti un servizio impeccabile.
        </p>

        <table className="w-full text-gray-800 text-sm sm:text-base">
          <tbody>
            {[
              { day: "Lunedì", hours: "09:00 - 19:00" },
              { day: "Martedì", hours: "09:00 - 19:00" },
              { day: "Mercoledì", hours: "09:00 - 19:00" },
              { day: "Giovedì", hours: "09:00 - 19:00" },
              { day: "Venerdì", hours: "09:00 - 19:00" },
              { day: "Sabato", hours: "09:00 - 19:00" },
              { day: "Domenica", hours: "Chiuso" },
            ].map((schedule, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 text-left font-medium">{schedule.day}</td>
                <td className="py-2 text-right font-bold text-yellow-500">
                  {schedule.hours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkingHoursSection;
