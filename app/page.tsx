import Carousel from "./components/Carousel";

const WHATSAPP = "5562994369529";
const WHATSAPP_MSG = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1%20Bruno%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20treino%20personalizado!`;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ color: "var(--teal)" }}>
            Bruno Teodoro
          </span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#sobre" className="hover:text-[--teal] transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-[--teal] transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-[--teal] transition-colors">Resultados</a>
            <a href="#contato" className="hover:text-[--teal] transition-colors">Contato</a>
          </nav>
          <a
            href={WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white px-5 py-2 rounded-full transition-colors"
            style={{ backgroundColor: "var(--teal)" }}
          >
            Fale comigo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white text-center px-6"
        style={{
          background: "linear-gradient(135deg, #0b7d88 0%, #0e9aa7 60%, #17b8c7 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto pt-20">
          <p className="uppercase tracking-widest text-sm mb-4 opacity-80">Personal Trainer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Bruno<br />Teodoro
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-lg mx-auto">
            Transforme seu corpo com treino personalizado, acompanhamento real e resultados que duram.
          </p>
          <a
            href={WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            style={{ color: "var(--teal)" }}
          >
            Quero começar agora →
          </a>
        </div>

        {/* wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="w-full aspect-[3/4] rounded-3xl flex items-center justify-center text-6xl"
            style={{ backgroundColor: "var(--teal-light)" }}
          >
            💪
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
              Sobre mim
            </p>
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Mais de 5 anos transformando vidas
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Sou Personal Trainer certificado e especialista em emagrecimento, hipertrofia e condicionamento físico. Atendo presencialmente e online.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Cada aluno recebe um plano 100% individualizado — porque o seu corpo e os seus objetivos são únicos.
            </p>
            <a
              href={WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-7 py-3 rounded-full text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--teal)" }}
            >
              Agendar avaliação gratuita
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6" style={{ backgroundColor: "var(--teal-light)" }}>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
            O que ofereço
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Serviços</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🏋️",
              title: "Treino Presencial",
              desc: "Acompanhamento individual na academia ou ao ar livre com foco total nos seus objetivos.",
            },
            {
              icon: "📱",
              title: "Consultoria Online",
              desc: "Planilhas de treino e suporte via WhatsApp para você treinar de qualquer lugar do mundo.",
            },
            {
              icon: "🥗",
              title: "Orientação Nutricional",
              desc: "Dicas e estratégias de alimentação para potencializar os seus resultados.",
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-red-500">
            Transformações
          </p>
          <h2 className="text-4xl font-extrabold text-white">Resultados dos meus alunos</h2>
          <p className="text-gray-400 mt-3">Fotos reais, resultados reais.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Carousel />
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section
        id="contato"
        className="py-24 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0b7d88, #0e9aa7)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Pronto para transformar seu corpo?</h2>
          <p className="text-lg opacity-90 mb-10">
            Entre em contato agora pelo WhatsApp e receba uma avaliação gratuita.
          </p>
          <a
            href={WHATSAPP_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-transform"
            style={{ color: "var(--teal)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.127 1.533 5.862L.057 23.571a.5.5 0 0 0 .615.612l5.79-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.502-5.241-1.381l-.376-.214-3.898.986.998-3.806-.228-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Falar no WhatsApp
          </a>
          <p className="mt-6 opacity-70 text-sm">
            (62) 99436-9529 · Respondo em até 1 hora
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-sm text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Bruno Teodoro Personal Trainer · Todos os direitos reservados
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={WHATSAPP_MSG}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25d366" }}
        aria-label="WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.557 4.127 1.533 5.862L.057 23.571a.5.5 0 0 0 .615.612l5.79-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.502-5.241-1.381l-.376-.214-3.898.986.998-3.806-.228-.389A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </div>
  );
}
