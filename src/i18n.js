import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Skills": "Skills",
      "Portfolio": "Portfolio",
      "Contact": "Contact",
      "Hello": "Hello",
      "I'm Henrique Lourenço": "I'm Henrique Lourenço",
      "Web Developer": "Web Developer",
      "me": "me",
      "About me": "My name is Henrique Lourenço. I am a web developer and live in Santos, Brazil. I'm very passionate and dedicated to my work. I like the lifelong learning style, I always want to improve and acquire knowledge. With about 1 year experiences as web developer, I have acquired the skills necessary to build great and premium websites.",
      "Download CV": "Download CV",
      "My": "My",
      "Frameworks": "Frameworks",
      "Systems and platforms": "Systems and platforms",
      "Styles": "Styles",
      "Languages": "Languages",
      "Portfolio": "Portfolio",
      "Press": "Press",
      "Access": "access",
      "to visit the project page or the": "to visit the project page or the",
      "GitHub icon": "GitHub icon",
      "to access the project in my repository" : "to access the project in my repository.",
      "Coffee Shop Description": "Sales system of a cafeteria. Allows for order control, providing an efficient solution for operation and administration.",
      "Pomodoro Timer Description": "Pomodoro Timer application that assists in time management and productivity enhancement, following the Pomodoro technique of work and break cycles.",
      "Feed Description": "Implements a feed system, allowing the display and sharing of content such as posts and comments in an organized and interactive manner.",
      "ToDo List Description": "Task list application, allowing users to create, organize, and manage their tasks efficiently and conveniently.",
      "Shop Description": "The project encompasses everything from the user interface to order processing and payments, providing a comprehensive solution for the online shopping experience.",
      "Calculator Description": "The project offers an intuitive and user-friendly interface for performing both basic and complex operations, including standard and scientific modes.",
      "Toggle Theme - MUI Description": "The project offers an intuitive and user-friendly interface for performing both basic and complex operations, including standard and scientific modes.",
      "Weather App Description": "The project offers an intuitive and user-friendly interface for performing both basic and complex operations, including standard and scientific modes.",
      "Contact": "Contact",
      "Contact me": "Contact me",      
    }
  },
  es: {
    translation: {
        "Home": "Inicio",
        "About": "Sobre",
        "Skills": "habilidades",
        "Portfolio": "Portafolio",
        "Contact": "Contacto",
        "Hello": "Hello",
        "I'm Henrique Lourenço": "Soy Henrique Lourenço",
        "Web Developer": "Web Developer",
        "me": "mí",
        "About me": "Mi nombre es Henrique Lourenço. Soy programador web y vivo en Santos, Brasil. Soy apasionado y dedicado a mi trabajo. Me gusta el estilo de aprendizaje constante, siempre busco mejorar y adquirir conocimientos. Con aproximadamente 1 año de experiencia como desarrollador web, he adquirido las habilidades necesarias para construir sitios web excelentes y de alta calidad.",
        "Download CV": "Descargar CV",
        "My": "Mis",
        "Frameworks": "Frameworks",
        "Systems and platforms": "Sistemas y plataformas",
        "Styles": "Estilos",
        "Languages": "Lenguajes",
        "Portfolio": "Portafolio",
        "Press": "Prensa",
        "Access": "Acceso",
        "to visit the project page or the": "para visitar la página del proyecto o el",
        "GitHub icon": "ícono de GitHub",
        "to access the project in my repository" : "para acceder al proyecto en mi repositorio.",
        "Coffee Shop Description": "Sistema de ventas de una cafetería. Permite el control de pedidos, proporcionando una solución eficiente para la operación y administración.",
        "Pomodoro Timer Description": "Aplicación de Pomodoro Timer que ayuda en la gestión del tiempo y mejora de la productividad, siguiendo la técnica de ciclos de trabajo y descanso del Pomodoro.",
        "Feed Description": "Implementa un sistema de feed, permitiendo la visualización y compartición de contenido como publicaciones y comentarios de manera organizada e interactiva.",
        "ToDo List Description": "Aplicación de lista de tareas, permitiendo a los usuarios crear, organizar y gestionar sus tareas de manera eficiente y conveniente.",
        "Shop Description": "El proyecto abarca desde la interfaz de usuario hasta el procesamiento de pedidos y pagos, proporcionando una solución integral para la experiencia de compra en línea.",
        "Calculator Description": "El proyecto ofrece una interfaz intuitiva y fácil de usar para realizar operaciones básicas y complejas, incluyendo modos estándar y científico.",
        "Toggle Theme - MUI Description": "El proyecto Toggle Theme MUI te permite cambiar entre temas claros y oscuros en una aplicación web.",
        "Weather App Description": "El proyecto es una aplicación web que proporciona información meteorológica en tiempo real, con una interfaz intuitiva y receptiva.",
        "Contact": "Contacto",
        "Contact me": "Contáctame"

    }
  },
  pt: {
    translation: {
        "Home": "Início",
        "About": "Sobre",
        "Skills": "habilidades",
        "Portfolio": "Portfólio",
        "Contact": "Contato",
        "Hello": "Hello",
        "I'm Henrique Lourenço": "Sou Henrique Lourenço",
        "Web Developer": "Desenvolvedor Web",
        "me": "mim",
        "About me": "Meu nome é Henrique Lourenço. Sou desenvolvedor web e moro em Santos, Brasil. Sou apaixonado e dedicado ao meu trabalho. Gosto do estilo de aprendizado contínuo, sempre busco melhorar e adquirir conhecimento. Com aproximadamente 1 ano de experiência como desenvolvedor web, adquiri as habilidades necessárias para construir sites excelentes e de alta qualidade.",
        "Download CV": "Baixar CV",
        "My": "Minhas",
        "Frameworks": "Frameworks",
        "Systems and platforms": "Sistemas e plataformas",
        "Styles": "Estilos",
        "Languages": "Linguagens",
        "Portfolio": "Portfólio",
        "Press": "Pressione",
        "Access": "acessar",
        "to visit the project page or the": "para visitar a página do projeto ou o",
        "GitHub icon": "ícone do GitHub",
        "to access the project in my repository" : "para acessar o projeto no meu repositório.",
        "Coffee Shop Description": "Sistema de vendas de uma cafeteria. Permite o controle de pedidos, proporcionando uma solução eficiente para operação e administração.",
        "Pomodoro Timer Description": "Aplicativo de Pomodoro Timer que auxilia no gerenciamento de tempo e aumento de produtividade, seguindo a técnica de ciclos de trabalho e descanso do Pomodoro.",
        "Feed Description": "Implementa um sistema de feed, permitindo a exibição e compartilhamento de conteúdo como postagens e comentários de maneira organizada e interativa.",
        "ToDo List Description": "Aplicativo de lista de tarefas, permitindo que os usuários criem, organizem e gerenciem suas tarefas de forma eficiente e conveniente.",
        "Shop Description": "O projeto abrange desde a interface do usuário até o processamento de pedidos e pagamentos, proporcionando uma solução abrangente para a experiência de compra online.",
        "Calculator Description": "O projeto oferece uma interface intuitiva e fácil de usar para realizar operações básicas e complexas, incluindo modos padrão e científico.",
        "Toggle Theme - MUI Description": "O projeto Toggle Theme MUI permite alternar entre temas claros e escuros em uma aplicação web.",
        "Weather App Description": "O projeto é uma aplicação web que fornece informações meteorológicas em tempo real, com uma interface intuitiva e responsiva.", 
        "Contact": "Contato",
        "Contact me": "Entre em contato comigo"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;