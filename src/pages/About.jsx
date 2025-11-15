import React from 'react';
import { Apple, ChefHat, Zap, DollarSign, HelpCircle } from 'lucide-react';
// 1. Ваше изображение импортировано - отлично!
import kebabImg from '../assets/kebab-img.png';

// -----------------------------------------------------------------
// ⬇️ ДАННЫЕ "О НАС" ⬇️
// -----------------------------------------------------------------
const aboutInfo = {
  title: "О нас",
  description: "«Пак Шаурма» — это не просто фаст-фуд, это место, где восточные традиции встречаются с современным подходом. Мы верим, что быстрая еда может быть и вкусной, и качественной. Каждый день мы готовим нашу шаурму с любовью, используя только проверенные и свежайшие ингредиенты.",
  features: [
    {
      id: 1,
      title: "Свежие продукты",
      description: "Ежедневная поставка мяса и овощей, гарантия идеального вкуса.",
      icon: "Apple",
    },
    {
      id: 2,
      title: "Фирменные соусы",
      description: "Секретные рецепты соусов, которые вы не найдете нигде больше.",
      icon: "ChefHat",
    },
    {
      id: 3,
      title: "Быстрое приготовление",
      description: "Ваш заказ будет готов в течение 5 минут. Экономим ваше время!",
      icon: "Zap",
    },
    {
      id: 4,
      title: "Доступные цены",
      description: "Высокое качество по цене, которая не ударит по кошельку.",
      icon: "DollarSign",
    },
  ],
};
// -----------------------------------------------------------------
// ⬆️ КОНЕЦ ДАННЫХ "О НАС" ⬆️
// -----------------------------------------------------------------


const iconMap = {
  Apple: Apple,
  ChefHat: ChefHat,
  Zap: Zap,
  DollarSign: DollarSign,
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-about-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-brand-red">
          {aboutInfo.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Колонка 1: Текст и Описание (без изменений) */}
          <div>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              {aboutInfo.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutInfo.features.map((feature) => {
                const Icon = iconMap[feature.icon] || HelpCircle;
                return (
                  <div 
                    key={feature.id} 
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 
                               hover:shadow-xl hover:border-brand-orange hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 mb-3 rounded-lg flex items-center justify-center bg-icon-gradient text-white shadow-lg">
                      <Icon className="h-6 w-6"/>
                    </div>
                    <h4 className="text-xl font-semibold mb-1 text-gray-800">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* ⬇️ ИСПРАВЛЕНА КОЛОНКА 2 ⬇️ */}
          {/* ----------------------------------------------------------------- */}
          <div className="flex justify-center lg:justify-end">
            {/* Мы убрали серый <div> и применили все стили (тень, закругление, размер)
              непосредственно к вашему тегу <img>.
              
              `object-cover` гарантирует, что изображение заполнит 
              контейнер (h-[600px]), не искажаясь.
            */}
            <img
              src={kebabImg}
              alt="Вертел с шаурмой"
              className="w-full max-w-lg h-[400px] lg:h-[600px] rounded-3xl shadow-2xl 
                         transition-transform duration-500 hover:scale-[1.02] 
                         object-cover" // object-cover очень важен для правильного отображения
            />
          </div>
          {/* ----------------------------------------------------------------- */}
          {/* ⬆️ КОНЕЦ ИСПРАВЛЕНИЯ ⬆️ */}
          {/* ----------------------------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default About;