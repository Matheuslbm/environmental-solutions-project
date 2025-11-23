import { Link } from 'react-router-dom';
import { ABOUT_CONTENT } from '../data/content';

export function About() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 py-24 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-2 text-4xl font-bold uppercase tracking-wider sm:text-5xl font-serif">
            About AWFD
          </h1>
          <p className="text-lg text-blue-100 font-light tracking-wide">
              Who We Are
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">

            {/* Lado Esquerdo: A FOTO (Atualizado) */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl group">
                {/* AQUI ESTÁ A IMAGEM REAL AGORA */}
                <img
                  src={ABOUT_CONTENT.imageUrl}
                  alt={ABOUT_CONTENT.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Sombra interna sutil para dar profundidade */}
                <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
              </div>
            </div>

            {/* Lado Direito: O TEXTO */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="mb-8 text-2xl font-bold uppercase text-black sm:text-3xl font-serif border-l-4 border-blue-500 pl-4">
                {ABOUT_CONTENT.title}
              </h2>

              <p className="text-lg leading-relaxed text-gray-600 text-justify">
                {ABOUT_CONTENT.text}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="bg-blue-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold uppercase text-blue-900 font-serif">
            Contact an Expert
          </h2>
          <Link
            to="/contato"
            className="inline-block rounded-full bg-blue-500 px-10 py-4 text-sm font-bold text-white shadow-lg transition transform hover:bg-blue-600 hover:-translate-y-1"
          >
            CLICK HERE
          </Link>
        </div>
      </section>

    </div>
  );
}