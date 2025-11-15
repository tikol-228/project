import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import classic from '../assets/orig.jpg';
import syrian from '../assets/syrian-kebab.jpg';
import chicken from '../assets/chicken kebab.webp';
import baran from '../assets/baran kebab.webp';
import kav from '../assets/kav-kebab.jpg';

const menuItems = [
  {
    id: 1,
    name: "Классическая шаурма",
    description: "Сочная курочка, свежие овощи, фирменный белый соус, завернутые в хрустящий лаваш.",
    price: 350,
    category: "shawarma",
    img: classic,
    popular: true,
  },
  {
    id: 2,
    name: "Сирийская шаурма",
    description: "Мраморная говядина, пикантный томатный соус, маринованный огурчик и зелень.",
    price: 400,
    category: "shawarma",
    img: syrian,
    popular: true,
  },
  {
    id: 3,
    name: "Острая шаурма",
    description: "Жгучий чили, соус Харисса, много мяса и свежий перец халапеньо для любителей острого.",
    price: 370,
    category: "shawarma",
    img: kav,
    popular: false,
  },
  {
    id: 4,
    name: "Вегетарианская шаурма",
    description: "Сытная шаурма с фалафелем, хумусом, свежими овощами и легким йогуртовым соусом.",
    price: 320,
    category: "shawarma",
    img: baran,
    popular: false,
  },
  {
    id: 5,
    name: "Картофель фри",
    description: "Идеально хрустящие снаружи и мягкие внутри ломтики картофеля, подается с кетчупом.",
    price: 150,
    category: "sides",
    img: chicken,
    popular: false,
  },
  {
    id: 6,
    name: "Салат Табуле",
    description: "Классический ливанский салат из булгура, петрушки, помидоров и лимонного сока.",
    price: 200,
    category: "sides",
    popular: false,
  },
  {
    id: 7,
    name: "Coca-Cola",
    description: "Охлажденный классический газированный напиток 0.5 л.",
    price: 100,
    category: "drinks",
    noDrinkImage: true,
    popular: false,
  },
  {
    id: 8,
    name: "Вода",
    description: "0.5 литров",
    price: 50,
    category: "drinks",
    noDrinkImage: true,
    popular: false,
  },
];
// -----------------------------------------------------------------
// ⬆️ КОНЕЦ ДАННЫХ МЕНЮ ⬆️
// -----------------------------------------------------------------


const categories = ['all', ...new Set(menuItems.map(item => item.category))];
const categoryLabels = {
  all: 'Все',
  shawarma: 'Шаурма',
  sides: 'Гарниры',
  drinks: 'Напитки',
};

// Компонент карточки блюда с изображением
const MenuItemCard = ({ item }) => {
  // Карточки напитков без изображения - меньший размер
  if (item.noDrinkImage) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-4 flex flex-col justify-between h-32">
        <div>
          <h3 className="text-lg font-bold mb-1 text-gray-800">{item.name}</h3>
          <p className="text-gray-500 text-xs mb-2">{item.description}</p>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-2xl font-extrabold text-brand-orange">{item.price}₽</span>
        </div>
      </div>
    );
  }

  // Обычные карточки с изображением
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Изображение блюда */}
      <div className="relative overflow-hidden h-52 bg-gray-200">
        {item.img ? (
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm font-semibold">
            Изображение отсутствует
          </div>
        )}
        
        {item.popular && (
          <div className="absolute top-3 right-3 bg-popular-badge text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
            <Flame className="h-4 w-4 fill-white"/>
            <span>Популярное</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-3xl font-extrabold text-brand-orange">{item.price}₽</span>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = menuItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-menu-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-brand-red">Наше Меню</h2>

        <div className="flex justify-center mb-12 flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-lg font-semibold rounded-full border-2 transition-all duration-300 shadow-md 
                ${activeCategory === category 
                  ? 'bg-brand-red text-white border-brand-red' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-brand-orange'}`
              }
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;