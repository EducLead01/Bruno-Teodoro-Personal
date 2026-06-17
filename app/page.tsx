import Carousel from "./components/Carousel";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FaqItem from "./components/FaqItem";

const COMPRAR = "https://sun.eduzz.com/1W3ZK3PPW2";
const WHATSAPP = "https://wa.me/5562994369529?text=Ol%C3%A1%2C%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Coxas%20e%20Gl%C3%BAteos%20PRO";
const VIDEO = "https://player.mediadelivery.net/embed/603567/e95d07c9-2042-4776-8e69-5df6d71a9e27?autoplay=true&loop=false&muted=false&preload=true&responsive=true";
const HERO_DESK = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_2400,q_90/v1770738834/hero-bruno_oeihj5.png";
const HERO_MOB = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_800,q_90/v1770905231/hero-bruno-mobile_pbk0z6.png";
const CDN = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_200,h_200,c_fill,q_auto,f_auto";

const avatares = [
  { src: `${CDN}/v1770917920/Olivia-Santos_qcoghw.jpg`, z: "z-[1]" },
  { src: `${CDN}/v1770917920/Maria-Fernanda_drzinr.jpg`, z: "z-[2]" },
  { src: `${CDN}/v1770917920/Caroline-Lopes_cv6dbp.jpg`, z: "z-[3]" },
  { src: `${CDN}/v1770917920/Fernanda-Lima_ofvdln.jpg`, z: "z-[4]" },
  { src: `${CDN}/v1770917920/Beatriz-Ribeiro_ft9os5.jpg`, z: "z-[5]" },
];

const checklist = [
  "Sem treinos mirabolantes.",
  "Sem dietas impossíveis.",
  "Apenas o básico bem feito.",
  "Com técnicas que quase ninguém ensina.",
];

const problemas = [
  "Sente que tem coxas finas",
  "Tem glúteos sem volume, mesmo treinando",
  "Já tentou vários treinos e não vê resultado",
  "Treina, se esforça… mas sente que está perdendo tempo",
];

const plano = [
  "Treino personalizado no app",
  "Dieta elaborada por nutricionista",
  "Suporte direto via WhatsApp",
  "Grupo VIP com dicas exclusivas",
  "Sem taxa escondida",
  "Sem valor antecipado",
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F4222F] flex-shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#F4222F] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const CircleCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F4222F] selection:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end lg:justify-center lg:items-center bg-black pb-0 sm:pb-10 lg:pb-0 lg:py-0">
        {/* Desktop background */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat opacity-90"
          style={{ backgroundImage: `url("${HERO_DESK}")`, backgroundPosition: "center top", backgroundSize: "100% auto" }}
        />
        {/* Mobile background */}
        <div
          className="lg:hidden absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url("${HERO_MOB}")`, backgroundPosition: "center 12%", backgroundSize: "100%" }}
        />
        {/* Mobile gradient overlay */}
        <div className="lg:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/95" />
        {/* Desktop side gradients */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-30 -mb-6 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-5 lg:max-w-xl lg:pt-20 xl:pt-28">
            {/* Mobile h1 */}
            <h1 className="block lg:hidden text-3xl font-black text-white leading-tight uppercase font-[family-name:var(--font-montserrat)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <span>Coxas e Glúteos maiores e mais definidos </span>
              <span className="text-[#F4222F]">em poucas semanas</span>
            </h1>
            {/* Desktop h1 */}
            <h1 className="hidden lg:block text-3xl xl:text-4xl font-black text-white leading-tight uppercase font-[family-name:var(--font-montserrat)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Coxas e Glúteos maiores e<br />mais definidos<br />
              <span className="text-[#F4222F]">em poucas semanas</span>
            </h1>
            {/* Desktop checklist */}
            <div className="hidden lg:block space-y-2 w-full">
              {checklist.map((item) => (
                <div key={item} className="text-white text-sm md:text-base font-semibold flex items-start justify-start gap-2">
                  <span className="text-[#F4222F] text-base leading-none mt-0.5">✓</span>
                  <span className="text-left">{item}</span>
                </div>
              ))}
            </div>
            {/* Desktop price */}
            <div className="hidden lg:inline-block">
              <div className="bg-black/60 border-2 border-[#F4222F] rounded-lg py-2 px-6 shadow-[0_0_20px_rgba(244,34,47,0.4)]">
                <p className="text-white text-base md:text-lg lg:text-xl font-black uppercase font-[family-name:var(--font-montserrat)]">
                  apenas <span className="text-[#F4222F]">R$ 29,90/mês</span>
                </p>
              </div>
            </div>
            {/* Desktop CTA */}
            <div className="hidden lg:flex justify-start w-full">
              <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-base">
                <span>QUERO COMEÇAR AGORA <ArrowRight /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
      </section>

      {/* ── MOBILE: checklist + preço + CTA ── */}
      <div className="lg:hidden bg-black px-6 pt-6 pb-8 flex flex-col items-center space-y-5">
        <div className="space-y-3 w-full max-w-sm">
          {checklist.map((item) => (
            <div key={item} className="text-white text-base font-semibold flex items-start gap-2">
              <span className="text-[#F4222F] text-xl leading-none mt-1">✓</span>
              <span className="text-left">{item}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-sm">
          <div className="bg-gradient-to-r from-[#F4222F]/20 via-[#F4222F]/30 to-[#F4222F]/20 border-2 border-[#F4222F] rounded-lg py-3 px-6 text-center shadow-[0_0_30px_rgba(244,34,47,0.4)]">
            <p className="text-white text-xl font-black uppercase font-[family-name:var(--font-montserrat)]">
              apenas <span className="text-[#F4222F]">R$ 29,90/mês</span>
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#F4222F] hover:bg-[#E01F2B] text-white text-lg font-bold py-4 px-6 rounded-sm skew-x-[-10deg] transition-all duration-300 shadow-[0_0_20px_rgba(244,34,47,0.5)]">
            <span className="block skew-x-[10deg] flex items-center gap-2 whitespace-nowrap">QUERO COMEÇAR AGORA <ArrowRight /></span>
          </a>
        </div>
      </div>

      {/* ── VÍDEO ── */}
      <section className="relative py-8 sm:py-0 lg:py-0 bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-[#F4222F]" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={VIDEO}
                loading="lazy"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen
                title="Vídeo de apresentação"
                style={{ border: 0, position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="flex justify-center mt-8 pb-8">
            <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
              <span>COMEÇAR HOJE! <ArrowRight /></span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CARROSSEL TRANSFORMAÇÕES ── */}
      <section id="transformations" className="py-5 md:py-10 bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Programa <span className="text-[#F4222F]">aprovado</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatares.map((a, i) => (
                    <img key={i} alt="Aluna" loading="lazy" width={48} height={48}
                      className={`w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition ${a.z}`}
                      src={a.src} />
                  ))}
                </div>
                <div className="border-l border-gray-600 pl-4">
                  <p className="text-lg text-white font-bold">
                    Aprovado por<br />
                    <span className="text-[#F4222F]">+1.200</span> alunas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-6">
            <Carousel />
          </div>

          <div className="text-center mt-12 space-y-3">
            <p className="text-2xl font-black uppercase font-[family-name:var(--font-montserrat)]">FAÇA PARTE DO TEAM BT</p>
            <p className="text-gray-400">A partir de R$ 29,90/mês</p>
            <div className="flex justify-center pt-2">
              <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
                <span>QUERO COMEÇAR AGORA <ArrowRight /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 pb-8 bg-black text-white relative">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight font-[family-name:var(--font-montserrat)]">
              O que nossas <span className="text-[#F4222F]">alunas</span> estão falando
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ── ISSO É PARA VOCÊ ── */}
      <section className="relative pt-5 pb-5 md:pt-8 md:pb-10 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4222F] rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F4222F] rounded-full blur-[100px]" />
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight font-[family-name:var(--font-montserrat)]">
              Isso é <span className="text-[#F4222F]">para você</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Esse programa foi desenvolvido para você que:
              </h3>
              <div className="space-y-4 mb-10">
                {problemas.map((p) => (
                  <div key={p} className="flex items-start gap-4 bg-black/40 border border-zinc-800 rounded-lg p-4 hover:border-[#F4222F]/50 transition-all duration-300 group">
                    <XIcon />
                    <p className="text-lg md:text-xl text-zinc-300 font-medium">{p}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#F4222F]/10 via-[#F4222F]/5 to-transparent border-l-4 border-[#F4222F] rounded-r-xl p-6 md:p-8 mb-6">
                <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">E não, o problema não é você.</p>
                <div className="space-y-4 text-lg md:text-xl text-zinc-300 leading-relaxed">
                  <p>O que falta é <span className="text-[#F4222F] font-bold">direção</span>,</p>
                  <p>treinar do <span className="text-[#F4222F] font-bold">jeito certo</span>,</p>
                  <p>com <span className="text-[#F4222F] font-bold">foco real em coxas e glúteos</span></p>
                  <p>e a alimentação alinhada para <span className="text-[#F4222F] font-bold">gerar crescimento</span>.</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-8 gap-3">
                <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F4222F] text-white px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-[0_0_20px_rgba(244,34,47,0.4)] hover:bg-[#d11d28] transition-all duration-300 hover:scale-105">
                  <CircleCheck />
                  <span>É exatamente isso que eu quero</span>
                </a>
                <p className="text-white text-lg md:text-xl font-bold">Por apenas <span className="text-[#F4222F]">29,90/mês</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="pt-10 pb-8 bg-black text-white relative">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight font-[family-name:var(--font-montserrat)]">
              O que você recebe ao entrar no programa<br />
              <span className="text-[#F4222F]">Coxas e Glúteos PRO</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                titulo: "Treino Personalizado",
                desc: "App exclusivo com vídeos explicativos dos exercícios focados em pernas e glúteos.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>
                  </svg>
                ),
              },
              {
                titulo: "Dieta por Nutricionista",
                desc: "Plano alimentar elaborado por nutricionista focado em resultados reais.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                  </svg>
                ),
              },
              {
                titulo: "Suporte Direto no WhatsApp",
                desc: "Tire dúvidas e receba orientações direto comigo via WhatsApp.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                ),
              },
              {
                titulo: "Grupo VIP Exclusivo",
                desc: "Acesso ao grupo VIP com dicas e orientações exclusivas para acelerar seus resultados.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
                  </svg>
                ),
              },
            ].map((b) => (
              <div key={b.titulo} className="bg-neutral-800/50 p-8 rounded-xl border border-white/5 hover:border-[#F4222F]/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-[#F4222F] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-montserrat)]">{b.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSINE AGORA ── */}
      <section id="plans" className="pt-8 pb-10 bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-4 font-[family-name:var(--font-montserrat)]">
            ASSINE <span className="text-[#F4222F]">AGORA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
          <p className="text-center text-gray-400 mb-8 text-xl">ㅤ</p>
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="relative bg-neutral-900 border border-[#F4222F] scale-105 z-10 shadow-[0_0_30px_rgba(244,34,47,0.2)] p-8 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-montserrat)]">MENSALIDADE RECORRENTE</h3>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400">R$</span>
                  <span className="text-5xl font-black text-white">29</span>
                  <span className="text-xl font-bold text-white">,90</span>
                  <span className="text-gray-500 text-sm">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plano.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-colors text-center bg-[#F4222F] hover:bg-[#E01F2B] text-white font-[family-name:var(--font-montserrat)]">
                COMEÇAR AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 bg-black relative z-10">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center -mb-1 uppercase tracking-tight font-[family-name:var(--font-montserrat)]">
            DÚVIDAS <span className="text-[#F4222F]">FREQUENTES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6 mb-6" />
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden backdrop-blur-sm">
            <FaqItem
              question="O Programa Coxas e Glúteos Pro pode ser feito na academia ou em casa?"
              answer="Sim! O programa foi desenvolvido para ser feito tanto na academia quanto em casa, com ou sem equipamentos."
            />
          </div>
        </div>
      </section>

      {/* ── WHATSAPP ── */}
      <section className="py-12 bg-black">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-visible">
            <div className="grid md:grid-cols-[250px_1fr] gap-4 items-center">
              <div className="flex justify-center md:justify-start relative md:-left-6 md:scale-105 p-3 md:p-0">
                <img
                  alt="WhatsApp BT Personal"
                  className="w-full max-w-[120px] md:max-w-[200px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  src="https://res.cloudinary.com/dhyeghmuy/image/upload/w_300,f_auto,q_auto/v1769436545/whatsapp-bt_nvgcz4_v7prdr.webp"
                />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left py-3 px-6 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-1 uppercase leading-tight font-[family-name:var(--font-montserrat)]">
                  MAIS ALGUMA <span className="text-[#F4222F]">DÚVIDA?</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 font-semibold mb-3">
                  Fale com o nosso time no <span className="text-[#25D366] font-black">WhatsApp</span> ↓
                </p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="bg-[#F4222F] hover:bg-[#E01F2B] text-white font-bold text-base px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg">
                  ENTRAR EM CONTATO
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-neutral-950 py-12 border-t border-white/5">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-shrink-0">
              <div className="max-w-[100px] md:max-w-[120px]">
                <img alt="BT Personal Trainer" className="w-full h-auto object-contain" loading="lazy"
                  src="https://brunoteodoropersonal.com.br/consultoria-bruno/logo-bt.webp" />
              </div>
            </div>
            <div className="text-center flex-1">
              <p className="text-gray-400 text-sm mb-2">Responsável Técnico:</p>
              <p className="text-gray-400 text-sm mb-3">Bruno: CREF 014326-G/GO</p>
              <p className="text-gray-500 text-sm">© 2026 Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              <a href="https://instagram.com/brunoteodoropersonal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F4222F] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── BOTÃO FLUTUANTE WHATSAPP ── */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform bg-[#25d366]"
        aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.127 1.533 5.862L.057 23.571a.5.5 0 0 0 .615.612l5.79-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.502-5.241-1.381l-.376-.214-3.898.986.998-3.806-.228-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </div>
  );
}
