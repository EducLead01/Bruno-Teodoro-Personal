"use client";

import { useState } from "react";
import Image from "next/image";

const transformacoes = [
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-1.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-3.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-4.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-5.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-6.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-7.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-8.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-9.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-10.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-11.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-12.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-13.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-14.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-15.webp" },
  { antes: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-16.webp", depois: "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations/transform-16.webp" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = transformacoes.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <div className="relative w-full overflow-hidden px-10">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(calc(-${index} * (33.333% + 5px)))` }}
      >
        {transformacoes.map((t, i) => (
          <div key={i} className="flex-none w-[calc(33.333%-11px)] flex gap-2">
            <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-red-600 aspect-[3/5]">
              <div className="absolute top-0 left-0 z-10 bg-black text-white text-xs font-bold px-2 py-1">ANTES</div>
              <Image src={t.antes} alt={`Antes ${i + 1}`} fill className="object-cover" unoptimized />
            </div>
            <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-red-600 aspect-[3/5]">
              <div className="absolute top-0 left-0 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1">DEPOIS</div>
              <Image src={t.depois} alt={`Depois ${i + 1}`} fill className="object-cover" unoptimized />
            </div>
          </div>
        ))}
      </div>

      <button onClick={prev} disabled={index === 0} className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-red-600 text-white text-xl font-bold flex items-center justify-center disabled:opacity-30 hover:bg-red-700 transition-colors">‹</button>
      <button onClick={next} disabled={index >= max} className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-red-600 text-white text-xl font-bold flex items-center justify-center disabled:opacity-30 hover:bg-red-700 transition-colors">›</button>
    </div>
  );
}
