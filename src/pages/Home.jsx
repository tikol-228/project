import React from 'react';
import { ArrowDown } from 'lucide-react';
import bannerKebab from '../assets/banner-kebab.png';

const Home = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-white text-center 
                 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bannerKebab})` }}
    >
      {/* Полупрозрачный оранжевый оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/60 to-brand-orange/40"></div>

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
          className="px-8 py-3 bg-white text-brand-orange text-xl font-semibold rounded-full shadow-2xl 
                     hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-105
                     animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400"
        >
          Посмотреть меню
        </button>
      </div>
    </section>
  );
};

export default Home;