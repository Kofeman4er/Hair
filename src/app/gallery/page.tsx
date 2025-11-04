"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Gallery data with categories
const galleryImages = [
  { id: 1, category: "hair", alt: "Bridal updo with soft curls" },
  { id: 2, category: "makeup", alt: "Natural glam makeup look" },
  { id: 3, category: "hair", alt: "Balayage highlights on long hair" },
  { id: 4, category: "makeup", alt: "Smokey eye evening makeup" },
  { id: 5, category: "hair", alt: "Short textured bob haircut" },
  { id: 6, category: "makeup", alt: "Bridal makeup with pink tones" },
  { id: 7, category: "hair", alt: "Beach waves styling" },
  { id: 8, category: "makeup", alt: "Bold red lip editorial look" },
  { id: 9, category: "hair", alt: "Keratin smooth straight hair" },
];

// Client-side filtering component
function GalleryContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  // Filter images based on URL param
  const filteredImages = filter
    ? galleryImages.filter((img) => img.category === filter)
    : galleryImages;

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest hair transformations and makeup artistry. Every look is crafted with passion and precision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <Link
            href="/gallery"
            className={`px-6 py-2 rounded-full transition ${
              !filter
                ? "bg-rose-600 text-white"
                : "bg-rose-100 text-rose-800 hover:bg-rose-200"
            }`}
          >
            All
          </Link>
          <Link
            href="/gallery?filter=hair"
            className={`px-6 py-2 rounded-full transition ${
              filter === "hair"
                ? "bg-rose-600 text-white"
                : "bg-rose-100 text-rose-800 hover:bg-rose-200"
            }`}
          >
            Hair
          </Link>
          <Link
            href="/gallery?filter=makeup"
            className={`px-6 py-2 rounded-full transition ${
              filter === "makeup"
                ? "bg-rose-600 text-white"
                : "bg-rose-100 text-rose-800 hover:bg-rose-200"
            }`}
          >
            Makeup
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className={`
                relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
                ${index % 5 === 0 || index % 7 === 0 ? "sm:row-span-2" : ""}
                ${index % 3 === 0 ? "lg:col-span-2" : ""}
              `}
            >
              <Image
                src={`/gallery/${img.id}.jpg`}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f3/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNMQIoIFMNPBn0dhHP3AAGqkfb/IH5B/9k="
              />

              {/* Hover Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium drop-shadow-md">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-rose-800 mb-4">
            Ready for Your Transformation?
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

// Wrap in Suspense for useSearchParams
export default function Gallery() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}