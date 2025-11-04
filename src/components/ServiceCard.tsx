export type Service = {
  title: string;
  description: string;
  price: string;
};

export default function ServiceCard({ title, description, price }: Service) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-rose-700">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-4 text-lg font-bold text-rose-900">{price}</p>
    </div>
  );
}