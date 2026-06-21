"use client";

import { useRef } from "react";

const reviews = [
  { nome: "Olívia Santos", cargo: "Aluna Transformada", foto: `/images/reviews/olivia-santos.jpg`, texto: "Em 4 semanas já senti mudanças incríveis! Meus glúteos ficaram mais firmes e minhas coxas mais definidas. O programa é simples e eficaz, sem treinos mirabolantes ou dietas impossíveis." },
  { nome: "Maria Fernanda", cargo: "Resultado em 30 dias", foto: `/images/reviews/maria-fernanda.jpg`, texto: "Nunca pensei que conseguiria resultados tão rápidos sem precisar de dietas malucas. O suporte no WhatsApp fez toda a diferença e me manteve focada no objetivo." },
  { nome: "Caroline Lopes", cargo: "Transformação Completa", foto: `/images/reviews/caroline-lopes.jpg`, texto: "O programa superou minhas expectativas! Em 30 dias meu corpo mudou completamente. Recomendo para todas que querem resultados de verdade e um acompanhamento personalizado." },
  { nome: "Fernanda Lima", cargo: "Mudança Real", foto: `/images/reviews/fernanda-lima.jpg`, texto: "Estava desanimada com outros programas que não davam resultado. O Coxas e Glúteos PRO me surpreendeu! Já na segunda semana vi mudanças significativas." },
  { nome: "Beatriz Ribeiro", cargo: "Confiança Renovada", foto: `/images/reviews/beatriz-ribeiro.jpg`, texto: "Minha autoestima mudou completamente! O programa não só transformou meu corpo, mas também minha mentalidade. Me sinto mais forte e confiante." },
];

const Stars = () => (
  <div className="flex gap-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-[#F4222F]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const slide = trackRef.current.querySelector<HTMLDivElement>(".review-slide");
    if (!slide) return;
    const step = slide.offsetWidth + 24; // width + gap
    trackRef.current.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("prev")}
        className="absolute left-2 md:left-4 top-[40%] -translate-y-1/2 z-10 bg-[#F4222F] hover:bg-[#d11d28] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>

      <div
        ref={trackRef}
        className="reviews-track flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing pb-4"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {reviews.map((r) => (
          <div
            key={r.nome}
            className="review-slide flex-shrink-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            style={{ scrollSnapAlign: "start", width: "calc(85% - 8px)" }}
          >
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6">
              <div className="flex items-center gap-4 mb-3">
                <img alt={r.nome} loading="lazy" width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" src={r.foto} />
                <div>
                  <h3 className="font-bold text-lg text-[#F4222F]">{r.nome}</h3>
                  <p className="text-sm text-gray-600">{r.cargo}</p>
                </div>
              </div>
              <Stars />
            </div>
            <div className="bg-[#0C0C0D] p-6">
              <p className="text-gray-300 leading-relaxed mb-2 line-clamp-5">{r.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("next")}
        className="absolute right-2 md:right-4 top-[40%] -translate-y-1/2 z-10 bg-[#F4222F] hover:bg-[#d11d28] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Próximo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </button>
    </div>
  );
}
