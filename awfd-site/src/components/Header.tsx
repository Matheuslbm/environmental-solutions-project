import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, COMPANY } from '../data/content';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* 1. LOGO */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold">
                                AW
                            </div>
                            <span className="text-xl font-bold text-blue-900 tracking-wide">
                                {COMPANY.name}
                            </span>
                        </Link>
                    </div>

                    {/* 2. NAVEGAÇÃO DESKTOP */}
                    {/* Mudei de 'md:flex' para 'lg:flex' */}
                    {/* Isso significa: "Só mostre os links se a tela for GRANDE (Desktop)" */}
                    <nav className="hidden lg:flex space-x-8">
                        {NAVIGATION.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${isActive(item.href) ? 'text-blue-900 font-bold' : 'text-gray-600'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* 3. BOTÃO HAMBÚRGUER */}
                    {/* Mudei de 'md:hidden' para 'lg:hidden' */}
                    {/* Isso significa: "Esconda esse botão se a tela for GRANDE (Desktop)" */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-blue-900 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MENU MOBILE (Dropdown) */}
            {/* Mudei para lg:hidden aqui também */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {NAVIGATION.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block rounded-md px-3 py-2 text-base font-medium ${isActive(item.href)
                                    ? 'bg-blue-50 text-blue-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-900'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}