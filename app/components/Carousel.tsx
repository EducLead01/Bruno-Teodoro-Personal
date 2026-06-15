"use client";

import { useState } from "react";
import Image from "next/image";

const fotos = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1549476464-37392f717541?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=600&fit=crop",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const prev = () => setIndex((i) => (i === 0 ? fotos.length - visible : i - 1));
  const next = () => setIndex((i) => (i >= fotos.length - visible ? 0 : i + 1));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(calc(-${index} * (33.333% + 16px)))` }}
      >
        {fotos.map((src, i) => (
          <div
            key={i}
            className="flex-none w-[calc(33.333%-11px)] rounded-2xl overflow-hidden border-2 border-red-600 bg-black aspect-[3/4] relative"
          >
            <Image
              src={src}
              alt={`Resultado ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors z-10"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors z-10"
      >
        ›
      </button>
    </div>
  );
}
