import { AmazonImage, AmazonIamgeSmall, TvastraImage, TvastraImageSmall, ShreeJewellerImage, ShreeJewellerImageSmall } from '../images/index'

export const Projects = [
    {
        linkText: "Amazon Clone",
        image: AmazonImage,
        smallImage: AmazonIamgeSmall,
        link: "https://e-commerce-amazon.netlify.app/",
        tech: ['React', 'Redux', 'ExpressJs', 'Styled-Component'],
        footerLink: {
            github: 'https://github.com/idk-Mohit/amazon-clone/',
            deploy: 'https://e-commerce-amazon.netlify.app/',
        },
        description: 'A Complete Amazon Clone built with ReactJs, Redux and Serverless. Search for products, add them to your cart and that\'s it. It\'s a clone, It doesn\'t let you buy stuff.'
    },
    {
        linkText: "Tvastra Healthcare",
        image: TvastraImage,
        smallImage: TvastraImageSmall,
        link: "https://tvastrahealthcare.cyclic.app/",
        tech: ['React', 'Redux', 'ExpressJs', 'Styled-Component'],
        footerLink: {
            github: 'https://github.com/idk-Mohit/Tvastra',
            deploy: 'https://tvastrahealthcare.cyclic.app/',
        },
        description: 'A web app for all medical help in one place. Search for doctors, hospitals, and treatments. A clean and interactive UI. Login for more functionality such as book an appointment, see your schedules or consult online.'
    },
    {
        linkText: "Shree Jewellers",
        image: ShreeJewellerImage,
        smallImage: ShreeJewellerImageSmall,
        link: "https://shree-jewellers.netlify.app/",
        tech: ['React', 'Redux', 'ExpressJs', 'Styled-Component'],
        footerLink: {
            github: 'https://github.com/idk-Mohit/Shree-Jewellers',
            deploy: 'https://shree-jewellers.netlify.app/',
        },
        description: 'A Complete Amazon Clone built with ReactJs, Redux and Serverless. Search for products, add them to your cart and that\'s it. It\'s a clone, It doesn\'t let you buy stuff.'
    },
]