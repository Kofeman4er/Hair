import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Women’s Haircut", description: "Wash, cut, blow-dry.", price: "$45–$65" },
  { title: "Men’s Haircut", description: "Clipper or scissor cut.", price: "$30–$40" },
  { title: "Root Touch-Up", description: "Color regrowth only.", price: "$70" },
  { title: "Full Color", description: "Single process all over.", price: "$90–$120" },
  { title: "Balayage", description: "Free-hand painting.", price: "$150–$250" },
  { title: "Keratin Treatment", description: "Smooth & frizz-free.", price: "$200+" },
  { title: "Makeup Application", description: "Everyday or special event.", price: "$75" },
  { title: "Bridal Package", description: "Hair + makeup + trial.", price: "$300" },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-rose-800 mb-12">
          Services & Pricing
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}