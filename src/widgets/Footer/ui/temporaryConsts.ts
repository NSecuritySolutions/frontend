import SvgPhone from "src/assets/icons/phone.svg";
import SvgHome from "src/assets/icons/home.svg";
import SvgMail from "src/assets/icons/mail.svg";

//TODO настроить якоря когда будут все блоки сверстаны

const navColumnLists = [
  {
    title: "Возможности",
    items: [
      { text: "Оставить заявку", navLink: "/home#request" },
      { text: "Готовые решения", navLink: "/home#solutions" },
      { text: "Калькулятор", navLink: "/home#calculator" },
      { text: "Загрузить спецификацию", navLink: "/home#specification" },
    ],
  },
  {
    title: "Каталог оборудования",
    items: [
      { text: "Видеонаблюдение", navLink: "/home#video-surveillance" },
      { text: "Домофония/СКУД", navLink: "/home#intercom-access-control" },
      {
        text: "Охранно-пожарная сигнализация",
        navLink: "/home#security-fire-alarm",
      },
    ],
  },
  {
    title: "Информация",
    items: [
      { text: "О компании/ О нас", navLink: "/home#about-us" },
      { text: "Наши услуги", navLink: "/home#our-services" },
      { text: "Часто задаваемые вопросы", navLink: "/home#faq" },
      { text: "Отзывы", navLink: "/home#reviews" },
      { text: "Примеры наших работ", navLink: "/home#portfolio" },
      { text: "Блог", navLink: "/home#blog" },
      { text: "Политика конфиденциальности", navLink: "/home#privacy-policy" },
    ],
  },
];

const contacts = [
  {
    icon: SvgPhone,
    text: "+7 (913) 011-06-45",
    link: "",
  },
  {
    icon: SvgHome,
    text: "Новосибирск, ул. Сухарная д. 96",
    link: "",
  },
  {
    icon: SvgMail,
    text: "kvick154@gmail.com",
    link: "",
  },
];

export { navColumnLists, contacts };
