import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold text-rose-800 mb-4">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.184733311385!2d-113.66562599999999!3d53.450023599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539ff5b43f9bbdcb%3A0xaf4c6c5165b74fb9!2sRobyn%20Hair%20%26%20Makeup!5e1!3m2!1sen!2sca!4v1762269730063!5m2!1sen!2sca"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          <div className="mt-6 space-y-2 text-black">
            <p className="font-medium">123 Salon St, [City], [State]</p>
            <p>Phone: <a href="tel:+15551234567" className="text-rose-600">(555) 123-4567</a></p>
            <p>Email: <a href="mailto:info@robynhair.com" className="text-rose-600">info@robynhair.com</a></p>
            <p className="mt-4">
              <strong>Hours:</strong><br />
              Mon–Fri: 9 AM – 7 PM<br />
              Sat: 9 AM – 5 PM<br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold text-rose-800 mb-4">Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}