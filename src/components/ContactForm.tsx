"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Replace with your own endpoint (e.g., Formspree, EmailJS, API route)
    await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Thank you! We’ll get back to you soon.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto text-black">
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register("name")}
          className="mt-1 w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="mt-1 w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-1 w-full p-2 border rounded"
        />
        {errors.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}