import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importando as setinhas
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { translations } = useLanguage();
  const { home } = translations;

  // Quantidade total de slides para facilitar a conta
  const totalSlides = home.galleryImages.length;

  // Função para ir para o Próximo Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Função para ir para o Slide Anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Efeito para Mudar Automaticamente (Auto-Play)
  useEffect(() => {
    // Cria um intervalo que roda a cada 5000ms (5 segundos)
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpeza: Se o usuário sair da página, o timer para (evita bugs de memória)
    return () => clearInterval(interval);
  }, [currentSlide]); // Recria o timer sempre que o slide muda

  return (
    <div className="flex flex-col">

      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-4 text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl font-serif">
            {home.hero.title}
          </h1>
          <p className="font-bold text-blue-200 tracking-wider text-sm sm:text-base uppercase">
            {home.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO TÉCNICA (Imagens Renders + Texto) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
            <div className="w-full md:w-5/12 flex flex-col gap-6 sticky top-24">
              <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
                <img src="/images/awfd-render.png" alt="Render AWFD" className="h-full w-full object-contain p-4" />
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
                <img src="/images/eco3-system.png" alt="Render ECO3" className="h-full w-full object-contain p-2" />
              </div>
            </div>

            <div className="w-full md:w-7/12 space-y-16">
              {home.technologies.map((tech) => (
                <div key={tech.id} className="flex flex-col">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif border-b-4 border-blue-500 inline-block w-fit pb-2">
                    {tech.title}
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-justify text-lg">
                    {tech.text.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARROSSEL DE SERVIÇOS (AQUI ESTÁ A MUDANÇA) */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 font-serif uppercase tracking-wider">
            {home.servicesTitle}
          </h2>

          {/* Container do Slider */}
          <div className="relative max-w-5xl mx-auto group">

            {/* Imagem Principal */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-white shadow-2xl border border-gray-200 relative">
              <img
                src={home.galleryImages[currentSlide].src}
                alt={home.galleryImages[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />

              {/* Legenda escura no rodapé da foto */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-4 px-6 text-left backdrop-blur-sm">
                <p className="font-bold text-lg">{home.galleryImages[currentSlide].alt}</p>
              </div>
            </div>

            {/* SETA ESQUERDA (Anterior) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-blue-900 shadow-lg hover:bg-blue-600 hover:text-white transition-all focus:outline-none opacity-0 group-hover:opacity-100"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </button>

            {/* SETA DIREITA (Próxima) */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-blue-900 shadow-lg hover:bg-blue-600 hover:text-white transition-all focus:outline-none opacity-0 group-hover:opacity-100"
              aria-label="Próxima foto"
            >
              <ChevronRight size={32} strokeWidth={3} />
            </button>

            {/* Indicadores (Bolinhas em baixo) */}
            <div className="flex justify-center gap-2 mt-6">
              {home.galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-8' : 'bg-blue-200 hover:bg-blue-400'
                    }`}
                  aria-label={`Ir para foto ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}