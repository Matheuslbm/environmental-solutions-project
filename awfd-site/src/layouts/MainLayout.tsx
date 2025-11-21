import { Outlet } from 'react-router-dom'; // <--- Removi ScrollRestoration daqui
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function MainLayout() {
  // Solução manual para o scroll voltar ao topo (funciona com qualquer Router)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo da Página */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
}