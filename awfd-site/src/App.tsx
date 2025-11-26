import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* O MainLayout envolve todas as rotas internas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="solucoes" element={<Solutions />} />
            <Route path="sobre" element={<About />} />
            <Route path="contato" element={<Contact />} />

            {/* Rota para páginas não encontradas (404) */}
            <Route path="*" element={<div className="p-10">Página não encontrada</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;