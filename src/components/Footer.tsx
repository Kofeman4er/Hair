export default function Footer() {
  return (
    <footer className="bg-rose-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">Robyn Hair & Makeup</p>
        <p className="mt-2">
          123 Salon St, [Your City], [State] • (555) 123-4567
        </p>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}