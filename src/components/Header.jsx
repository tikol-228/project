import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const navLinks = [
  { name: 'Главная', id: 'home' },
  { name: 'Меню', id: 'menu' },
  { name: 'О нас', id: 'about' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full 
      ${isScrolled
        ? 'bg-brand-orange/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
      }`}>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Логотип */}
        <a 
          href="#home"
          onClick={(e) => handleNavLinkClick(e, 'home')}
          className="flex items-center space-x-2 text-2xl font-bold transition-colors duration-300 text-white hover:text-gray-200"
        >
          <Utensils className="h-6 w-6"/>
          <span>Пак Шаурма</span>
        </a>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavLinkClick(e, link.id)}
              className="nav-link text-white text-lg font-medium transition-colors duration-300 hover:text-gray-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Мобильное меню (кнопка) */}
        <button
          className="md:hidden text-white transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Мобильное меню (выпадающий список) */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-red/95 backdrop-blur-sm shadow-xl transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavLinkClick(e, link.id)}
              className="text-white text-xl font-medium p-3 text-left transition-colors duration-300 hover:bg-brand-orange rounded-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;