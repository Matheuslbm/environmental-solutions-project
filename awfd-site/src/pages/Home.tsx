import { useState } from 'react';
import { HOME_CONTENT } from '../data/content';

export function Home() {
  // Estado para controlar qual imagem está aparecendo grande na galeria
  // Começa com o índice 0 (a primeira imagem)
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION (O Topo Azul) */}
      <section className="relative bg-blue-900 py-24 text-center text-white overflow-hidden">
        {/* Fundo decorativo de "água" (Simulado com gradiente por enquanto) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-900 opacity-90"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-4 text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl font-serif">
            {HOME_CONTENT.hero.title}
          </h1>
          <p className="font-bold text-blue-200 tracking-wider text-sm sm:text-base uppercase">
            {HOME_CONTENT.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. SEÇÃO DIVIDIDA (Imagens Esquerda x Texto Direita) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* COLUNA ESQUERDA: Imagens Verticais */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
               {/* Placeholder para as imagens verticais do equipamento (Render 3D) */}
               <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm text-center border border-gray-300">
                  [Imagem Render AWFD Peça]
               </div>
               <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm text-center border border-gray-300">
                  [Imagem Render Sistema Completo]
               </div>
            </div>

            {/* COLUNA DIREITA: Textos Explicativos */}
            <div className="w-full md:w-2/3 space-y-12">
              {HOME_CONTENT.technologies.map((tech) => (
                <div key={tech.id}>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">
                    {tech.title}
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                    {tech.text.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEÇÃO GALERIA DE SERVIÇOS */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          
          {/* Título (Corrigi o typo "ALGNS" para "ALGUNS") */}
          <h2 className="text-3xl font-bold text-blue-900 mb-10 font-serif uppercase">
            Alguns de Nossos Serviços
          </h2>

          {/* Componente de Galeria */}
          <div className="max-w-4xl mx-auto">
            
            {/* Imagem Principal Grande */}
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-300 shadow-lg">
               {/* Lógica: Mostra a imagem cujo índice bate com o estado activeImageIndex */}
               <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                 {/* Substituir pela tag <img src={HOME_CONTENT.galleryImages[activeImageIndex].src} /> */}
                 [Foto Grande: {HOME_CONTENT.galleryImages[activeImageIndex].alt}]
               </div>
            </div>

            {/* Miniaturas (Thumbnails) */}
            <div className="flex justify-center gap-4 overflow-x-auto pb-4">
              {HOME_CONTENT.galleryImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-20 w-24 flex-shrink-0 overflow-hidden rounded border-2 transition-all
                    ${activeImageIndex === index ? 'border-blue-600 opacity-100 ring-2 ring-blue-400' : 'border-transparent opacity-60 hover:opacity-100'}
                  `}
                >
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs">
                    {/* <img src={img.src} /> */}
                    Thumb {index + 1}
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}