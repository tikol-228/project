import React from 'react';
import { ArrowDown } from 'lucide-react';

// -----------------------------------------------------------------
// ⬇️ БЕЗ ВНЕШНИХ URL ИЗОБРАЖЕНИЙ ⬇️
// -----------------------------------------------------------------
// const heroImageUrl = "..." // Удаляем эту строку
// -----------------------------------------------------------------
// ⬆️ КОНЕЦ ⬆️
// -----------------------------------------------------------------

const Home = () => {
  return (
    <section 
      id="home" 
      // Теперь фон - просто серый цвет
      className="relative min-h-screen flex items-center justify-center text-white text-center 
                 bg-gray-700 bg-cover bg-center bg-fixed" // bg-fixed оставим для демонстрации parallax-эффекта
    >
      {/* Градиентный оверлей - остался, чтобы сохранить цветовую схему */}
      <div className="absolute inset-0 bg-hero-overlay"></div>

      <div className="relative z-10 p-4 max-w-4xl">
        <h1 
          className="text-6xl md:text-8xl font-extrabold mb-4 text-shadow-lg 
                     animate-in fade-in slide-in-from-bottom-10 duration-700"
        >
          Пак Шаурма
        </h1>
        <p 
          className="text-2xl md:text-3xl font-light mb-10 text-shadow-lg 
                     animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200"
        >
          Восточные вкусы в каждом кусочке
        </p>
        
        <button 
          onClick={() => document.getElementById('menu').scrollIntoView()}
          className="px-8 py-3 bg-brand-orange text-white text-xl font-semibold rounded-full shadow-2xl 
                     hover:bg-brand-red transition-all duration-300 transform hover:scale-105
                     animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400"
        >
          Посмотреть меню
        </button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-orange-300"/>
        </div>
      </div>
    </section>
  );
};

export default Home;