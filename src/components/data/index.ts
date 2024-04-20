
import { IProduct,IFormInput, ILoginInput } from "../interface";
import { v4 as uuid } from "uuid";

export const Products:IProduct [] = [
    {
      id: uuid(),
      title: "Chemise en lin",
      des: "Chemise décontractée en lin pour homme.",
      imageUrl: "https://i.pinimg.com/564x/e1/c9/2f/e1c92fa4609fa56546b0ae2f2d0b9a3f.jpg",
      price: "29.99"
    },
    {
      id: uuid(),
      title: "Robe d'été à fleurs",
      des: "Robe légère parfaite pour les journées ensoleillées.",
      imageUrl: "https://i.pinimg.com/564x/52/4e/2b/524e2b112692b7bf9962cd5888014816.jpg",
      price: "39.99"
    },
    {
      id: uuid(),
      title: "Montre élégante",
      des: "Montre-bracelet élégante avec bracelet en cuir.",
      imageUrl: "https://i.pinimg.com/564x/a5/bf/ff/a5bfffdc9071e0a3662091511f40d092.jpg",
      price: "79.99"
    },
    {
      id: uuid(),
      title: "Casque audio sans fil",
      des: "Casque audio sans fil avec une qualité sonore exceptionnelle.",
      imageUrl: "https://i.pinimg.com/564x/a5/57/5e/a5575e76d1e605cd73227f7602ca9fea.jpg",
      price: "99.99"
    },
    {
      id: uuid(),
      title: "Sac à main en cuir",
      des: "Sac à main en cuir véritable pour femme.",
      imageUrl: "https://i.pinimg.com/564x/d1/b3/3e/d1b33e0f6c0092d9a52ecaff723f04d9.jpg",
      price: "59.99"
    },
    {
      id: uuid(),
      title: "Chaussures de course",
      des: "Chaussures de course légères et confortables.",
      imageUrl: "https://i.pinimg.com/564x/6b/b7/e6/6bb7e6024bb7fdc65cbccf011ad56de3.jpg",
      price: "79.99"
    },
    {
      id: uuid(),
      title: "Tasse à café en céramique",
      des: "Tasse à café en céramique avec un design unique.",
      imageUrl: "https://i.pinimg.com/564x/af/11/22/af1122ee41b8f9538d0322bccd6fb36d.jpg",
      price: "9.99"
    },
    {
      id: uuid(),
      title: "Ordinateur portable",
      des: "Ordinateur portable puissant avec un écran tactile.",
      imageUrl: "https://i.pinimg.com/564x/77/97/64/779764636f57be913b45b7d12a15eff0.jpg",
      price: "899.99"
    },
    {
      id: uuid(),
      title: "Ensemble de pinceaux de maquillage",
      des: "Ensemble de pinceaux de maquillage professionnels.",
      imageUrl: "https://i.pinimg.com/564x/46/f9/5a/46f95a890ce0c387a85fc06cfef5b797.jpg",
      price: "24.99"
    },
    {
      id: uuid(),
      title: "Enceinte Bluetooth portable",
      des: "Enceinte Bluetooth portable pour écouter de la musique où que vous soyez.",
      imageUrl: "https://i.pinimg.com/564x/bc/67/74/bc6774a939a7dab6e1e5078cd05e72ed.jpg",
      price: "49.99"
    }
  ];

  export const formInputsList: IFormInput[] = [
    {
      id: "title",
      name: "title",
      label: "Product Title",
      type: "text",
    },
    {
      id: "description",
      name: "des",
      label: "Product Description",
      type: "text",
    },
    {
      id: "image",
      name: "imageUrl",
      label: "Product Image URL",
      type: "text",
    },
    {
      id: "price",
      name: "price",
      label: "Product Price",
      type: "text",
    },
  ];

  export const LOGIN_FORM : ILoginInput [] = [

   
    {
        type: 'text',
        name: 'identifier',
        placeholder:'Email address',
        validation:{
            required:true,
            pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        }
    },
    {
        type: 'password',
        name: 'password',
        placeholder:'Password',
        validation:{
            required:true,
            minLength:6
        }
    },
    
]
  