import Image from "next/image";
import Carousel from "./components/Carousel";

const COMPRAR = "https://sun.eduzz.com/1W3ZK3PPW2";
const WHATSAPP = "https://wa.me/5562994369529?text=Ol%C3%A1%2C%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Coxas%20e%20Gl%C3%BAteos%20PRO";
const VIDEO = "https://player.mediadelivery.net/embed/603567/e95d07c9-2042-4776-8e69-5df6d71a9e27?autoplay=true&loop=false&muted=false&preload=true&responsive=true";
const HERO_DESK = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_2400,q_90/v1770738834/hero-bruno_oeihj5.png";
const HERO_MOB = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_800,q_90/v1770905231/hero-bruno-mobile_pbk0z6.png";
const CDN = "https://res.cloudinary.com/dhyeghmuy/image/upload/w_200,h_200,c_fill,q_auto,f_auto";
const BASE = "https://brunoteodoropersonal.com.br/consultoria-bruno";

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

const reviews = [
  { nome: "Olívia Santos", cargo: "Aluna Transformada", foto: `${BASE}/reviews/olivia-santos.jpg`, texto: "Em 4 semanas já senti mudanças incríveis! Meus glúteos ficaram mais firmes e minhas coxas mais definidas. O programa é simples e eficaz, sem treinos mirabolantes ou dietas impossíveis." },
  { nome: "Maria Fernanda", cargo: "Resultado em 30 dias", foto: `${BASE}/reviews/maria-fernanda.jpg`, texto: "Nunca pensei que conseguiria resultados tão rápidos sem precisar de dietas malucas. O suporte no WhatsApp fez toda a diferença e me manteve focada no objetivo." },
  { nome: "Caroline Lopes", cargo: "Transformação Completa", foto: `${BASE}/reviews/caroline-lopes.jpg`, texto: "O programa superou minhas expectativas! Em 30 dias meu corpo mudou completamente. Recomendo para todas que querem resultados de verdade e um acompanhamento personalizado." },
  { nome: "Fernanda Lima", cargo: "Mudança Real", foto: `${BASE}/reviews/fernanda-lima.jpg`, texto: "Estava desanimada com outros programas que não davam resultado. O Coxas e Glúteos PRO me surpreendeu! Já na segunda semana vi mudanças significativas." },
  { nome: "Beatriz Ribeiro", cargo: "Confiança Renovada", foto: `${BASE}/reviews/beatriz-ribeiro.jpg`, texto: "Minha autoestima mudou completamente! O programa não só transformou meu corpo, mas também minha mentalidade. Me sinto mais forte e confiante." },
];

const beneficios = [
  { titulo: "Treino Personalizado", desc: "App exclusivo com vídeos explicativos dos exercícios focados em pernas e glúteos." },
  { titulo: "Dieta por Nutricionista", desc: "Plano alimentar elaborado por nutricionista focado em resultados reais." },
  { titulo: "Suporte Direto no WhatsApp", desc: "Tire dúvidas e receba orientações direto comigo via WhatsApp." },
  { titulo: "Grupo VIP Exclusivo", desc: "Acesso ao grupo VIP com dicas e orientações exclusivas para acelerar seus resultados." },
];

const plano = [
  "Treino personalizado no app",
  "Dieta elaborada por nutricionista",
  "Suporte direto via WhatsApp",
  "Grupo VIP com dicas exclusivas",
  "Sem taxa escondida",
  "Sem valor antecipado",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F4222F] selection:text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen lg:min-h-screen flex flex-col justify-end lg:justify-center lg:items-center bg-black pb-0 sm:pb-10 lg:pb-0 lg:py-0">
        {/* Desktop bg */}
        <div className="hidden lg:block absolute inset-0 bg-[length:100%_auto] bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url("${HERO_DESK}")`, backgroundPosition: "center top" }} />
        {/* Mobile bg */}
        <div className="lg:hidden absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${HERO_MOB}")`, backgroundPosition: "center 12%", backgroundSize: "100%" }} />
        {/* Gradients */}
        <div className="lg:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/95" />
        <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-30 w-full -mb-6 lg:mb-0">
          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6 lg:max-w-xl lg:pt-40 xl:pt-48">

              {/* Título mobile */}
              <h1 className="block lg:hidden text-3xl font-black text-white leading-[1.1] uppercase font-[family-name:var(--font-montserrat)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <span>Coxas e Glúteos maiores e mais definidos </span>
                <span className="text-[#F4222F]">em poucas semanas</span>
              </h1>

              {/* Título desktop */}
              <h1 className="hidden lg:block text-[2.6rem] xl:text-[3.2rem] font-black text-white leading-[1.1] uppercase font-[family-name:var(--font-montserrat)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Coxas e Glúteos maiores e<br />mais definidos<br />
                <span className="text-[#F4222F]">em poucas semanas</span>
              </h1>

              {/* Checklist desktop */}
              <div className="hidden lg:block space-y-3 w-full max-w-sm lg:max-w-none">
                {checklist.map((item) => (
                  <div key={item} className="text-white text-base md:text-lg font-semibold flex items-start justify-center lg:justify-start gap-2">
                    <span className="text-[#F4222F] text-xl leading-none mt-1">✓</span>
                    <span className="text-left">{item}</span>
                  </div>
                ))}
              </div>

              {/* Preço desktop */}
              <div className="hidden lg:inline-block max-w-full">
                <div className="price-box">
                  <p className="text-white text-lg md:text-xl lg:text-2xl font-black uppercase font-[family-name:var(--font-montserrat)]">
                    apenas <span className="text-[#F4222F]">R$ 29,90/mês</span>
                  </p>
                </div>
              </div>

              {/* CTA desktop */}
              <div className="hidden lg:flex justify-center lg:justify-start w-full">
                <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-base sm:text-lg md:text-xl">
                  <span>QUERO COMEÇAR AGORA <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
      </section>

      {/* ── MOBILE: Checklist + Preço + CTA ── */}
      <div className="lg:hidden bg-black px-6 pt-6 pb-8 flex flex-col items-center space-y-5">
        <div className="space-y-3 w-full max-w-sm">
          {checklist.map((item) => (
            <div key={item} className="text-white text-base font-semibold flex items-start gap-2">
              <span className="text-[#F4222F] text-xl">✓</span>
              <span className="text-left">{item}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-sm">
          <div className="price-box text-center w-full">
            <p className="text-white text-xl font-black uppercase font-[family-name:var(--font-montserrat)]">
              apenas <span className="text-[#F4222F]">R$ 29,90/mês</span>
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm flex justify-center">
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg w-full justify-center">
            <span>QUERO COMEÇAR AGORA <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </a>
        </div>
      </div>

      {/* ── VÍDEO ── */}
      <section className="py-8 bg-black">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F4222F]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={VIDEO}
              loading="lazy"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen
              title="Vídeo de apresentação"
              style={{ border: 0, position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
              <span>COMEÇAR HOJE! <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROGRAMA APROVADO + CARROSSEL ── */}
      <section id="transformations" className="py-5 md:py-10 bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
              Programa <span className="text-[#F4222F]">aprovado</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F4222F] to-transparent mx-auto mt-6" />
            <div className="mt-12 flex justify-center">
              <div className="flex items-center divide-x divide-gray-600">
                <div className="flex -space-x-3 pr-10">
                  {avatares.map((a, i) => (
                    <img key={i} alt="Aluna" loading="lazy" width={48} height={48}
                      className={`w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition ${a.z}`}
                      src={a.src} />
                  ))}
                </div>
                <div className="pl-4">
                  <p className="text-lg text-white font-bold">
                    Aprovado por<br />
                    <span className="text-[#F4222F]">+1.200</span> alunas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <Carousel />
          </div>

          <div className="text-center mt-12 space-y-3">
            <p className="text-2xl font-black uppercase font-[family-name:var(--font-montserrat)]">FAÇA PARTE DO TEAM BT</p>
            <p className="text-gray-400">A partir de R$ 29,90/mês</p>
            <div className="flex justify-center pt-2">
              <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
                <span>QUERO COMEÇAR AGORA <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase font-[family-name:var(--font-montserrat)]">
            O que nossas alunas estão falando
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.nome} {...r} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {reviews.slice(3).map((r) => (
              <ReviewCard key={r.nome} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ISSO É PARA VOCÊ ── */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 font-[family-name:var(--font-montserrat)]">
            Isso é para você?
          </h2>
          <h3 className="text-xl font-semibold mb-8 text-gray-300">
            Esse programa foi desenvolvido para você que:
          </h3>
          <ul className="text-left space-y-4 mb-8 text-gray-300 text-lg">
            {["Sente que tem coxas finas", "Tem glúteos sem volume, mesmo treinando", "Já tentou vários treinos e não vê resultado", "Treina, se esforça… mas sente que está perdendo tempo"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#F4222F] mt-1 text-xl">•</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 mb-2">E não, o problema não é você.</p>
          <p className="text-gray-400 mb-2">O que falta é direção, treinar do jeito certo, com foco real em coxas e glúteos e a alimentação alinhada para gerar crescimento.</p>
          <p className="text-white font-bold text-xl mt-6 mb-2">É exatamente isso que eu quero</p>
          <p className="text-gray-400 mb-8">Por apenas <span className="text-white font-bold">R$ 29,90/mês</span></p>
          <div className="flex justify-center">
            <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
              <span>QUERO COMEÇAR AGORA <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="py-16 px-4 bg-black border-t border-[#F4222F]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase mb-12 font-[family-name:var(--font-montserrat)]">
            O que você recebe ao entrar no programa{" "}
            <span className="text-[#F4222F]">Coxas e Glúteos PRO</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((b) => (
              <div key={b.titulo} className="bg-zinc-900 border border-[#F4222F]/30 rounded-2xl p-6">
                <h3 className="text-[#F4222F] font-bold text-lg mb-2 font-[family-name:var(--font-montserrat)]">{b.titulo}</h3>
                <p className="text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASSINE AGORA ── */}
      <section className="py-16 px-4 bg-black" id="assinar">
        <div className="max-w-sm mx-auto text-center border-2 border-[#F4222F] rounded-2xl p-8 shadow-[0_0_40px_rgba(244,34,47,0.3)]">
          <p className="uppercase tracking-widest text-gray-400 text-sm mb-1 font-[family-name:var(--font-montserrat)]">MENSALIDADE RECORRENTE</p>
          <p className="text-6xl font-black text-white mb-0 font-[family-name:var(--font-montserrat)]">R$29,90</p>
          <p className="text-gray-400 mb-6">/mês</p>
          <ul className="text-left space-y-3 mb-8 text-gray-300">
            {plano.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#F4222F]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer" className="btn-cta text-base w-full justify-center">
            <span>COMEÇAR AGORA</span>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-black border-t border-[#F4222F]/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-center uppercase mb-10 font-[family-name:var(--font-montserrat)]">Dúvidas Frequentes</h2>
          <details className="border border-[#F4222F]/40 rounded-xl p-5 cursor-pointer hover:border-[#F4222F] transition-colors">
            <summary className="font-bold text-white text-lg">O Programa Coxas e Glúteos Pro pode ser feito na academia ou em casa?</summary>
            <p className="text-gray-400 mt-3 leading-relaxed">Sim! O programa foi desenvolvido para ser feito tanto na academia quanto em casa, com ou sem equipamentos.</p>
          </details>
        </div>
      </section>

      {/* ── WHATSAPP ── */}
      <section className="py-16 px-4 bg-black text-center border-t border-[#F4222F]/20">
        <div className="max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://res.cloudinary.com/dhyeghmuy/image/upload/w_300,f_auto,q_auto/v1769436545/whatsapp-bt_nvgcz4_v7prdr.webp"
              alt="WhatsApp BT Personal"
              width={200} height={200}
              className="mx-auto rounded-full"
              unoptimized
            />
          </div>
          <h2 className="text-2xl font-black mb-2 uppercase font-[family-name:var(--font-montserrat)]">MAIS ALGUMA DÚVIDA?</h2>
          <p className="text-gray-400 mb-8">Fale com o nosso time no WhatsApp ↓</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#25d366] hover:bg-[#20b358] text-white font-extrabold text-lg uppercase px-8 py-4 rounded-xl transition-colors">
            ENTRAR EM CONTATO
          </a>
        </div>
      </section>

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

function ReviewCard({ nome, cargo, foto, texto }: { nome: string; cargo: string; foto: string; texto: string }) {
  return (
    <div className="bg-zinc-900 border border-[#F4222F]/30 rounded-2xl p-6 hover:border-[#F4222F]/60 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <img src={foto} alt={nome} width={48} height={48} className="w-12 h-12 rounded-full object-cover flex-shrink-0" loading="lazy" />
        <div>
          <p className="font-bold text-white font-[family-name:var(--font-montserrat)]">{nome}</p>
          <p className="text-[#F4222F] text-xs font-semibold">{cargo}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{texto}</p>
    </div>
  );
}
