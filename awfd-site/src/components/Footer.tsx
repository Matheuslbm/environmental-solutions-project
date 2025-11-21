import { COMPANY } from '../data/content';

export function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      {/* Efeito de Gradiente para simular o fundo "água" */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-900 opacity-90"></div>

      {/* Conteúdo Principal */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          
          {/* LOGO CIRCULAR (Placeholder estilizado) */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-300 bg-blue-900 shadow-lg">
            <span className="font-bold text-xl tracking-widest text-white">
              {COMPANY.name}
            </span>
            {/* Quando tiver a imagem do logo: 
                <img src="/logo.png" alt="Logo AWFD" className="h-full w-full rounded-full object-cover" /> 
            */}
          </div>

          {/* ENDEREÇO - Extraído do content.ts */}
          <address className="mb-2 not-italic text-blue-100">
            <p className="text-lg font-medium">{COMPANY.address}</p>
            <p className="text-base opacity-80">{COMPANY.zip}</p>
          </address>


        </div>
      </div>
    </footer>
  );
}