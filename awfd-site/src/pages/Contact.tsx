import { useState } from 'react'; // <--- Importamos o useState para controlar o modal
import { useForm } from 'react-hook-form';
import { X, XCircle } from 'lucide-react'; // <--- Ícones para o modal
import { CONTACT_PAGE, TEAM } from '../data/content';

// Definindo o formato dos dados do formulário
interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  // Estado para controlar a visibilidade do Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuração do React Hook Form (adicionei o 'reset' para limpar o form)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  // Função que roda quando o usuário clica em Enviar
  const onSubmit = (data: ContactFormData) => {
    // Apenas para debug, se quiser ver os dados
    console.log('Dados capturados:', data); 
    
    // 1. Abre o modal
    setIsModalOpen(true);
    
    // 2. Limpa o formulário para não ficar os dados lá
    reset();
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-400 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="mb-4 text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">
            {CONTACT_PAGE.title}
          </h1>
          <p className="text-lg font-light text-blue-50">
            {CONTACT_PAGE.subtitle}
          </p>
        </div>
      </section>

      {/* 2. FORMULÁRIO + TEXTO */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            
            {/* LADO ESQUERDO: Formulário */}
            <div className="w-full lg:w-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                
                {/* Inputs ... (Mantive igual ao seu código) */}
                <div>
                  <input 
                    {...register('name', { required: true })}
                    placeholder="Name *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.name && <span className="text-xs text-red-500">Required field</span>}
                </div>

                <div>
                  <input 
                    {...register('company', { required: true })}
                    placeholder="Company *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.company && <span className="text-xs text-red-500">Required field</span>}
                </div>

                <div>
                  <input 
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="E-mail *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.email && <span className="text-xs text-red-500">Invalid email</span>}
                </div>

                <div>
                  <input 
                    {...register('phone', { required: true })}
                    placeholder="Phone *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.phone && <span className="text-xs text-red-500">Required field</span>}
                </div>

                <div>
                  <textarea 
                    {...register('message', { required: true })}
                    rows={4}
                    placeholder="Enter your message here *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-500">Required field</span>}
                </div>

                {/* Botão Centralizado */}
                <div className="mt-4 flex justify-center">
                  <button 
                    type="submit"
                    className="rounded bg-blue-500 px-8 py-3 font-bold text-white shadow-md transition hover:bg-blue-600"
                  >
                    SEND MESSAGE
                  </button>
                </div>

              </form>
            </div>

            {/* LADO DIREITO: Texto Institucional */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="mb-6 text-2xl font-bold uppercase text-gray-800 font-serif">
                {CONTACT_PAGE.descriptionTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {CONTACT_PAGE.descriptionText}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONTATOS DIRETOS (Equipe) */}
      <section className="bg-white pb-20 pt-4 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            {TEAM.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-blue-900">
                  {person.name}
                </h3>
                <p className="text-sm font-bold text-gray-700 mb-1">
                  {person.role}
                </p>
                <p className="text-gray-600">
                  {person.phone}
                </p>
                <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL DE FEEDBACK (Aparece quando isModalOpen === true) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-opacity">
          {/* Caixa Branca do Modal */}
          <div className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-2xl animate-fade-in">
            
            {/* Botão de Fechar (X) no topo direito */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Conteúdo do Modal */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-100 p-3 text-red-600">
                <XCircle size={48} />
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Sorry, Message Not Sent!
              </h3>
              
              <p className="mb-6 text-gray-600 leading-relaxed">
                We apologize for the inconvenience. Our contact form is currently experiencing technical difficulties, and we are working to resolve the issue. 
                
                Thank you for your interest. Please <strong>contact our team directly</strong> via phone or email listed below.
              </p>

              {/* Lista Rápida dos Telefones no Modal */}
              <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 text-left">
                 {TEAM.map(person => (
                   <div key={person.name} className="mb-2 last:mb-0 border-b last:border-0 border-gray-200 pb-2 last:pb-0">
                     <span className="font-bold text-blue-900">{person.name}:</span> <span className="text-gray-700">{person.phone} {person.email && `| ${person.email}`}</span>
                   </div>
                 ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}