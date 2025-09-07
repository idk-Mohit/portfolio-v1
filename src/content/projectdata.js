import {
  AmazonImage,
  AmazonIamgeSmall,
  TvastraImage,
  TvastraImageSmall,
  ShreeJewellerImage,
  ShreeJewellerImageSmall,
  PlugNPlayImage,
  PlugNPlayImageSmall,
} from "../images/index";

export const Projects = [
  {
    linkText: "Plug-n-Play (WIP)",
    image: PlugNPlayImage,
    smallImage: PlugNPlayImageSmall,
    link: "https://plug-n-play-six.vercel.app/",
    tech: ["React", "D3.js", "Jotai", "Tailwind", "Vite", "Wasm", "Rust"],
    footerLink: {
      github: "https://github.com/idk-Mohit/",
      deploy: "https://plug-n-play-six.vercel.app/",
    },
    description:
      "In-browser data visualization tool. Parses 100k+ rows instantly with no backend. Privacy-first, performance-focused. (WIP)",
  },
  {
    linkText: "Amazon Clone",
    image: AmazonImage,
    smallImage: AmazonIamgeSmall,
    link: "https://e-commerce-amazon.netlify.app/",
    tech: ["React", "Redux", "ExpressJs", "Styled-Component", "MUI", "Swiper"],
    footerLink: {
      github: "https://github.com/idk-Mohit/amazon-clone/",
      deploy: "https://e-commerce-amazon.netlify.app/",
    },
    description:
      "A Complete Amazon Clone built with ReactJs, Redux and Serverless. Search for products, add them to your cart and that's it. It's a clone, It doesn't let you buy stuff.",
  },
  {
    linkText: "Tvastra Healthcare",
    image: TvastraImage,
    smallImage: TvastraImageSmall,
    link: "https://tvastrahealthcare.vercel.app/",
    tech: ["ExpressJs", "MongoDB", "Passport", "EJS", "Vanilla JavaScript"],
    footerLink: {
      github: "https://github.com/idk-Mohit/Tvastra",
      deploy: "https://tvastrahealthcare.vercel.app/",
    },
    description:
      "A web app for all medical help in one place. Search for doctors, hospitals, and treatments. A clean and interactive UI. Login for more functionality such as book an appointment, see your schedules or consult online.",
  },
  {
    linkText: "Shree Jewellers",
    image: ShreeJewellerImage,
    smallImage: ShreeJewellerImageSmall,
    link: "https://shree-jewellers.netlify.app/",
    tech: ["React", "Swiper", "Scroll Reveal"],
    footerLink: {
      github: "https://github.com/idk-Mohit/Shree-Jewellers",
      deploy: "https://shree-jewellers.netlify.app/",
    },
    description:
      "A complete jewelry e-commerce platform built with ReactJs. Browse stunning jewelry collections, add items to your cart, and explore a smooth shopping experience. The app features a sleek, modern UI, interactive animations, and a fully functional cart system for seamless navigation.",
  },
];
