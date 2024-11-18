import React from "react";

const WorkingHoursSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* Mappa a schermo intero sulla sinistra */}
      <div className="w-full md:w-1/2 h-96 md:h-auto">
        <iframe
          title="Barbershop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8397594727315!2d-122.41941508468168!3d37.774929779759985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f2343df7%3A0x5e1b8c65d1c6e20e!2sBarbershop!5e0!3m2!1sen!2sus!4v1678739602835!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Testo sulla destra */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          <span className="text-yellow-500">Siamo</span> Aperti
        </h2>
        <p className="text-gray-600 mb-6">
          Vieni a trovarci durante gli orari di apertura. Siamo sempre pronti a
          offrirti un servizio impeccabile.
        </p>

        <table className="w-full text-gray-800">
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
