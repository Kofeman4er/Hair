import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const previewServices = [
  {
    title: "Hair Cut & Style",
    description: "Precision cuts with a custom blow-dry.",
    price: "from $45",
  },
  {
    title: "Balayage / Highlights",
    description: "Hand-painted color for a natural sun-kissed look.",
    price: "from $120",
  },
  {
    title: "Bridal Makeup",
    description: "Full glam, long-lasting, trial included.",
    price: "from $150",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-rose-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional hair styling and makeup artistry tailored to you.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {previewServices.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block text-rose-600 hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </section>
    </>
  );
}