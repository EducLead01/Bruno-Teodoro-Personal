import Image from "next/image";
import Carousel from "./components/Carousel";

const COMPRAR = "https://sun.eduzz.com/1W3ZK3PPW2";
const WHATSAPP = "https://wa.me/5562994369529?text=Ol%C3%A1%2C%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Programa%20Coxas%20e%20Gl%C3%BAteos%20PRO";
const VIDEO = "https://player.mediadelivery.net/embed/603567/e95d07c9-2042-4776-8e69-5df6d71a9e27";
const BASE = "https://brunoteodoropersonal.com.br/consultoria-bruno";

const avatares = [
  `${BASE}/reviews/olivia-santos.jpg`,
  `${BASE}/reviews/maria-fernanda.jpg`,
  `${BASE}/reviews/caroline-lopes.jpg`,
  `${BASE}/reviews/fernanda-lima.jpg`,
  `${BASE}/reviews/beatriz-ribeiro.jpg`,
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

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
        style={{ background: "linear-gradient(to bottom, #1a0000 0%, #000 60%)" }}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 uppercase">
            Coxas e Glúteos maiores e{" "}
            <span className="text-red-500">mais definidos</span>{" "}
            em poucas semanas
          </h1>
          <ul className="text-left inline-block text-lg mb-8 space-y-2">
            {["Sem treinos mirabolantes.", "Sem dietas impossíveis.", "Apenas o básico bem feito.", "Com técnicas que quase ninguém ensina."].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-lg mb-6">apenas <span className="text-white font-bold text-2xl">R$ 29,90/mês</span></p>
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl uppercase px-10 py-5 rounded-lg transition-colors shadow-lg shadow-red-900">
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-900/30">
          <iframe
            src={VIDEO}
            className="w-full h-full"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="text-center mt-8">
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl uppercase px-10 py-5 rounded-lg transition-colors">
            COMEÇAR HOJE!
          </a>
        </div>
      </section>

      {/* APROVADO */}
      <section className="py-12 px-4 text-center border-y border-red-900/40">
        <div className="flex justify-center mb-4">
          {avatares.map((src, i) => (
            <div key={i} className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 -ml-3 first:ml-0 relative">
              <Image src={src} alt={`Aluna ${i + 1}`} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm uppercase tracking-widest">Aprovado por</p>
        <p className="text-3xl font-extrabold text-white">+1.200 alunas</p>
      </section>

      {/* TRANSFORMAÇÕES */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 uppercase">
            Resultados <span className="text-red-500">reais</span>
          </h2>
          <Carousel />
          <div className="text-center mt-10">
            <p className="text-2xl font-extrabold uppercase mb-2">FAÇA PARTE DO TEAM BT</p>
            <p className="text-gray-400 mb-6">A partir de R$ 29,90/mês</p>
            <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl uppercase px-10 py-5 rounded-lg transition-colors">
              QUERO COMEÇAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 uppercase">O que nossas alunas estão falando</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.nome} className="bg-zinc-900 border border-red-900/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image src={r.foto} alt={r.nome} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="font-bold text-white">{r.nome}</p>
                    <p className="text-red-400 text-xs">{r.cargo}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{r.texto}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {reviews.slice(3).map((r) => (
              <div key={r.nome} className="bg-zinc-900 border border-red-900/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image src={r.foto} alt={r.nome} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="font-bold text-white">{r.nome}</p>
                    <p className="text-red-400 text-xs">{r.cargo}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA VOCÊ? */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold uppercase mb-8">Isso é para você?</h2>
          <h3 className="text-xl font-bold mb-6 text-gray-300">Esse programa foi desenvolvido para você que:</h3>
          <ul className="text-left space-y-3 mb-8 text-gray-300 text-lg">
            {["Sente que tem coxas finas", "Tem glúteos sem volume, mesmo treinando", "Já tentou vários treinos e não vê resultado", "Treina, se esforça… mas sente que está perdendo tempo"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 mb-2">E não, o problema não é você.</p>
          <p className="text-gray-400 mb-2">O que falta é direção, treinar do jeito certo, com foco real em coxas e glúteos e a alimentação alinhada para gerar crescimento.</p>
          <p className="text-white font-bold text-lg mt-4 mb-6">É exatamente isso que eu quero</p>
          <p className="text-gray-400 mb-6">Por apenas <span className="text-white font-bold">R$ 29,90/mês</span></p>
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold text-xl uppercase px-10 py-5 rounded-lg transition-colors">
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center uppercase mb-12">
            O que você recebe ao entrar no programa <span className="text-red-500">Coxas e Glúteos PRO</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((b) => (
              <div key={b.titulo} className="bg-zinc-900 border border-red-900/40 rounded-2xl p-6">
                <h3 className="text-red-400 font-bold text-lg mb-2">{b.titulo}</h3>
                <p className="text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSINE AGORA */}
      <section className="py-16 px-4 bg-black" id="assinar">
        <div className="max-w-sm mx-auto text-center border border-red-600 rounded-2xl p-8">
          <p className="uppercase tracking-widest text-gray-400 text-sm mb-2">MENSALIDADE RECORRENTE</p>
          <p className="text-5xl font-extrabold text-white mb-1">R$29,90</p>
          <p className="text-gray-400 mb-6">/mês</p>
          <ul className="text-left space-y-3 mb-8 text-gray-300">
            {["Treino personalizado no app", "Dieta elaborada por nutricionista", "Suporte direto via WhatsApp", "Grupo VIP com dicas exclusivas", "Sem taxa escondida", "Sem valor antecipado"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-red-500">✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={COMPRAR} target="_blank" rel="noopener noreferrer"
            className="block bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg uppercase py-4 rounded-lg transition-colors">
            COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center uppercase mb-10">Dúvidas Frequentes</h2>
          <details className="border border-red-900/40 rounded-xl p-5 cursor-pointer">
            <summary className="font-bold text-white">O Programa Coxas e Glúteos Pro pode ser feito na academia ou em casa?</summary>
            <p className="text-gray-400 mt-3">Sim! O programa foi desenvolvido para ser feito tanto na academia quanto em casa, com ou sem equipamentos.</p>
          </details>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className="py-16 px-4 bg-black text-center">
        <div className="max-w-sm mx-auto">
          <div className="mb-6">
            <Image
              src="https://res.cloudinary.com/dhyeghmuy/image/upload/w_300,f_auto,q_auto/v1769436545/whatsapp-bt_nvgcz4_v7prdr.webp"
              alt="WhatsApp BT Personal"
              width={200}
              height={200}
              className="mx-auto rounded-full"
              unoptimized
            />
          </div>
          <h2 className="text-2xl font-extrabold mb-2">MAIS ALGUMA DÚVIDA?</h2>
          <p className="text-gray-400 mb-6">Fale com o nosso time no WhatsApp ↓</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg uppercase px-8 py-4 rounded-lg transition-colors">
            ENTRAR EM CONTATO
          </a>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform bg-green-500"
        aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.127 1.533 5.862L.057 23.571a.5.5 0 0 0 .615.612l5.79-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.502-5.241-1.381l-.376-.214-3.898.986.998-3.806-.228-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

    </div>
  );
}
