/* Изображения с Unsplash для реалистичного вида.
  Источник: Unsplash
  Авторы: 
  - Шаурма: Mgg Vitchakorn, Victoria Shes
  - Картошка: Louis Hansel
  - Напиток: YesMore Content
*/

import orig from '../assets/orig.jpg'
import kav from '../assets/kav-kebab.jpg'
import kebabImg from '../assets/kebab-img.png'

export const menuItems = [
  {
    id: 1,
    name: "Классическая шаурма",
    description: "Сочная курочка, свежие овощи, фирменный белый соус, завернутые в хрустящий лаваш.",
    price: 350,
    category: "shawarma",
    image: orig,
    popular: true,
  },
  {
    id: 2,
    name: "Шаурма с говядиной",
    description: "Мраморная говядина, пикантный томатный соус, маринованный огурчик и зелень.",
    price: 400,
    category: "shawarma",
    // image: ,
    popular: true,
  },
  {
    id: 3,
    name: "Кавказская шаурма",
    description: "Жгучий чили, соус Харисса, много мяса и свежий перец халапеньо для любителей острого.",
    price: 370,
    category: "shawarma",
    image: kav,
    popular: false,
  },
  {
    id: 4,
    name: "Вегетарианская шаурма",
    description: "Сытная шаурма с фалафелем, хумусом, свежими овощами и легким йогуртовым соусом.",
    price: 320,
    category: "shawarma",
    image: "https://images.unsplash.com/photo-1598715682226-72f3e3e0706c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 5,
    name: "Картофель фри",
    description: "Идеально хрустящие снаружи и мягкие внутри ломтики картофеля, подается с кетчупом.",
    price: 150,
    category: "sides",
    image: "https://images.unsplash.com/photo-1585114002164-4a0f4881062b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 6,
    name: "Салат Табуле",
    description: "Классический ливанский салат из булгура, петрушки, помидоров и лимонного сока.",
    price: 200,
    category: "sides",
    image: "https://images.unsplash.com/photo-1582234316041-a50e1897c9b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 7,
    name: "Coca-Cola",
    description: "Охлажденный классический газированный напиток 0.5 л.",
    price: 100,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1625805527184-2a60938e1180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    id: 8,
    name: "Айран",
    description: "Традиционный турецкий кисломолочный напиток, отлично утоляет жажду.",
    price: 120,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1605383129878-651030d433b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
];

export const aboutInfo = {
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
  // Добавляем URL для изображения "О нас"
  imageUrl: kebabImg
};