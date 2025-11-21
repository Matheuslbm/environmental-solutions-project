import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';

export function Solutions() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION (Topo com fundo de água) */}
      <section className="relative bg-blue-900 py-24 text-center text-white">
        {/* Gradiente simulando a água do print */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-4 text-3xl font-bold uppercase tracking-wide sm:text-4xl md:text-5xl">
            Conheça as Aplicações do AWFD
          </h1>
          <p className="text-lg font-medium text-blue-100 sm:text-xl">
            Resolvendo seu problema com efluentes
          </p>
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          
          {/* Grid Responsivo: 1 coluna no celular, 2 no tablet, 3 no PC */}
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col items-center text-center group">
                
                {/* Imagem do Card */}
                <div className="mb-6 h-48 w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                    {/* Quando tiver as fotos reais, use: <img src={service.imageUrl} ... /> */}
                    [Foto: {service.title}]
                  </div>
                </div>

                {/* Título */}
                <h3 className="mb-3 min-h-[3.5rem] text-lg font-bold uppercase leading-tight text-gray-900">
                  {service.title}
                </h3>

                {/* Aquele tracinho azul separador do print */}
                <div className="mb-4 h-1 w-12 bg-blue-500"></div>

                {/* Descrição */}
                <p className="text-sm leading-relaxed text-gray-600 text-justify">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION (Faixa Azul Clara no final) */}
      <section className="bg-blue-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-xl font-bold uppercase text-blue-900 sm:text-2xl">
            Contate um de nossos profissionais
          </h2>
          <Link
            to="/contato"
            className="inline-block rounded bg-blue-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-600 shadow-md"
          >
            VEJA MAIS
          </Link>
        </div>
      </section>

    </div>
  );
}