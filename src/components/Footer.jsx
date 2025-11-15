import React from 'react';
import { Phone, MapPin, Clock, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    // Используем цвет из config
    <footer className="bg-brand-brown-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-brand-orange/50 pb-8 mb-6">
          
          {/* Колонка 1: О компании */}
          <div>
            <div className="flex items-center space-x-2 text-3xl font-bold mb-3 text-brand-orange">
              <Utensils className="h-7 w-7"/>
              <span>Пак Шаурма</span>
            </div>
            <p className="text-gray-300 text-lg">
              Восточные вкусы в каждом кусочке. <br/>Готовим с душой и заботой.
            </p>
          </div>

          {/* Колонка 2: Контакты */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-brand-orange/90">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors"/>
                <a href="tel:+74951234567" className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                  +375 29 123456789
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-brand-orange mt-1 group-hover:text-white transition-colors shrink-0"/>
                <a 
                  href="https://yandex.ru/maps" // Используем более релевантную ссылку 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300"
                >
                  г. Минск, ул. Мстиславца, 8 (рядом с метро)
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Время работы */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-brand-orange/90">Время работы</h3>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-brand-orange"/>
              <p className="text-lg text-gray-200">
                Ежедневно: 08:00 – 22:00
              </p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="text-center text-gray-400 pt-4">
          © {new Date().getFullYear()} Пак Шаурма. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;