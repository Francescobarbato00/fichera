import { useRouter } from "next/router";

const HomeSection = () => {
  const router = useRouter();

  const navigateToAppointment = () => {
    router.push("/Appointment");
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Sfondo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/df.jpg')" }}
      ></div>

      {/* Overlay nero semi-trasparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      {/* Contenuto */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 text-white max-w-4xl">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide animate-fadeIn text-center sm:text-left">
          DFBARBERSHOP
        </h1>
        <p className="mt-4 text-sm sm:text-lg font-light leading-relaxed text-center sm:text-left">
          La rivoluzione dello stile: precisione, cura dei dettagli e
          un'esperienza unica che unisce tradizione e modernità.
          Ora disponibile il nostro Chatbot di intelligenza artificiale per prenotare dove e quando vuoi!
        </p>
        <div className="mt-6 flex justify-start w-full">
          <button
            onClick={navigateToAppointment}
            className="px-6 py-3 bg-yellow-500 text-black font-medium uppercase hover:bg-yellow-600 transition-all duration-300"
          >
            Prenota Ora
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
