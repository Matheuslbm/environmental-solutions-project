import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';

export function Solutions() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-900 py-24 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>

        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-4 text-3xl font-bold uppercase tracking-wide sm:text-4xl md:text-5xl">
            Discover AWFD Applications
          </h1>
          <p className="text-lg font-medium text-blue-100 sm:text-xl">
            Solving Your Effluent Challenges
          </p>
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col items-center text-center group">

                {/* IMAGEM DO CARD (Atualizada) */}
                <div className="mb-6 h-48 w-full overflow-hidden rounded-lg shadow-md relative">
                  {/* Efeito de zoom na imagem ao passar o mouse (group-hover) */}
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay azul sutil ao passar o mouse */}
                  <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                </div>

                {/* Título */}
                <h3 className="mb-3 min-h-[3.5rem] text-lg font-bold uppercase leading-tight text-gray-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* Tracinho azul */}
                <div className="mb-4 h-1 w-12 bg-blue-500 group-hover:w-24 transition-all duration-300"></div>

                {/* Descrição */}
                <p className="text-sm leading-relaxed text-gray-600 text-justify">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="bg-blue-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-xl font-bold uppercase text-blue-900 sm:text-2xl">
            Contact one of our professionals.          </h2>
          <Link
            to="/contato"
            className="inline-block rounded bg-blue-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-600 shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}