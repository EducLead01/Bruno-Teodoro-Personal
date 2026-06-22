"use client";

import { useEffect, useRef } from "react";

const slides = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/transformations/new-transform-${i + 1}.jpeg`,
  alt: `Transformação ${i + 1}`,
}));

export default function Carousel() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const init = async () => {
      const { Swiper } = await import("swiper");
      const { Navigation, Autoplay, Pagination } = await import("swiper/modules");
      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Autoplay, Pagination],
          slidesPerView: 1.2,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
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
    <div className="relative max-w-7xl mx-auto">
      <div ref={swiperRef} className="swiper transformations-swiper pb-12">
        <div className="swiper-wrapper">
          {slides.map((s, i) => (
            <div key={i} className="swiper-slide" style={{ height: "auto", alignSelf: "flex-start" }}>
              <div className="bg-gradient-to-br from-[#F4222F] via-[#E01F2B] to-[#C01E28] p-1 rounded-2xl shadow-2xl">
                <div className="bg-neutral-900 rounded-2xl p-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded z-10">ANTES</span>
                    <span className="absolute top-2 right-2 bg-[#F4222F] text-white text-xs font-bold px-2 py-1 rounded z-10">DEPOIS</span>
                    <img
                      alt={s.alt}
                      loading="lazy"
                      className="w-full object-cover rounded-lg"
                      src={s.src}
                      style={{ height: "420px", objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
      <button
        ref={prevRef}
        aria-label="Anterior"
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F4222F] hover:bg-[#d11d28] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextRef}
        aria-label="Próximo"
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F4222F] hover:bg-[#d11d28] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
