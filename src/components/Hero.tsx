import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-rose-100 to-rose-200 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Robyn Hair & Makeup
        </h1>
        <p className="mt-4 text-xl text-white">
          Where style meets artistry
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
        >
          Book Appointment
        </Link>
      </div>
    </section>
  );
}