import { useForm } from 'react-hook-form';
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
  // Configuração do React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  // Função que roda quando o usuário clica em Enviar
  const onSubmit = (data: ContactFormData) => {
    console.log('Dados do formulário:', data);
    alert('Mensagem enviada com sucesso! (Simulação)');
    // Aqui você colocaria a integração com EmailJS ou Backend no futuro
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-blue-400 py-20 text-center text-white">
        {/* Gradiente e Bolhas (Simulado) */}
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
                
                {/* Nome */}
                <div>
                  <input 
                    {...register('name', { required: true })}
                    placeholder="Nome *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.name && <span className="text-xs text-red-500">Campo obrigatório</span>}
                </div>

                {/* Empresa */}
                <div>
                  <input 
                    {...register('company', { required: true })}
                    placeholder="Empresa *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.company && <span className="text-xs text-red-500">Campo obrigatório</span>}
                </div>

                {/* Email */}
                <div>
                  <input 
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="E-mail *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.email && <span className="text-xs text-red-500">Email inválido</span>}
                </div>

                {/* Telefone */}
                <div>
                  <input 
                    {...register('phone', { required: true })}
                    placeholder="Telefone *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                  {errors.phone && <span className="text-xs text-red-500">Campo obrigatório</span>}
                </div>

                {/* Mensagem */}
                <div>
                  <textarea 
                    {...register('message', { required: true })}
                    rows={4}
                    placeholder="Digite sua mensagem aqui *" 
                    className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-500">Campo obrigatório</span>}
                </div>

                {/* Botão Centralizado */}
                <div className="mt-4 flex justify-center">
                  <button 
                    type="submit"
                    className="rounded bg-blue-500 px-8 py-3 font-bold text-white shadow-md transition hover:bg-blue-600"
                  >
                    ENVIAR MENSAGEM
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
          
          {/* Aqui usamos o .map na lista TEAM do content.ts */}
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

    </div>
  );
}