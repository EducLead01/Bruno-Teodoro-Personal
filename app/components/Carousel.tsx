"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  { antes: "/t/transform-1.webp", depois: "/t/transform-3.webp" },
  { antes: "/t/transform-4.webp", depois: "/t/transform-5.webp" },
  { antes: "/t/transform-6.webp", depois: "/t/transform-7.webp" },
  { antes: "/t/transform-8.webp", depois: "/t/transform-9.webp" },
  { antes: "/t/transform-10.webp", depois: "/t/transform-11.webp" },
  { antes: "/t/transform-12.webp", depois: "/t/transform-13.webp" },
  { antes: "/t/transform-14.webp", depois: "/t/transform-15.webp" },
  { antes: "/t/transform-16.webp", depois: "/t/transform-16.webp" },
];

const BASE = "https://brunoteodoropersonal.com.br/consultoria-bruno/transformations";

export default function Carousel() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Navigation, Autoplay } = await import("swiper/modules");
      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Autoplay],
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: false,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          },
        });
      }
    };
    init();
  }, []);

  return (
    <div className="relative">
      <div ref={swiperRef} className="swiper swiper-transformations pb-12">
        <div className="swiper-wrapper">
          {slides.map((s, i) => (
            <div key={i} className="swiper-slide !h-auto">
              <div className="bg-gradient-to-br from-[#F4222F] via-[#E01F2B] to-[#C01E28] p-[3px] rounded-2xl shadow-2xl h-full">
                <div className="bg-neutral-900 rounded-2xl p-4 h-full">
                  <div className="flex gap-2 h-full">
                    <div className="relative flex-1">
                      <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded z-10">ANTES</span>
                      <img
                        src={`${BASE}/transform-${s.antes.split("transform-")[1]}`}
                        alt={`Antes ${i + 1}`}
                        className="w-full h-[400px] object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative flex-1">
                      <span className="absolute top-2 left-2 bg-[#F4222F] text-white text-xs font-bold px-2 py-1 rounded z-10">DEPOIS</span>
                      <img
                        src={`${BASE}/transform-${s.depois.split("transform-")[1]}`}
                        alt={`Depois ${i + 1}`}
                        className="w-full h-[400px] object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#F4222F] rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-[#E01F2B] transition-colors -ml-5">‹</button>
      <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#F4222F] rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-[#E01F2B] transition-colors -mr-5">›</button>
    </div>
  );
}
