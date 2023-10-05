import zapato1 from '/Users/MatiasOviedo/Desktop/react/proyecto-react/src/assets/imageProducts/zapato1.webp'
import zapato2 from '/Users/MatiasOviedo/Desktop/react/proyecto-react/src/assets/imageProducts/zapato2.webp'

export const productsData = [
    {
        id:1,
        image: zapato1,
        name: "Two-tone white and blue men's golf shoes in leather",
        price: 420,
        sizes: [
            39, 
            40, 
            41, 
            42, 
            43, 
            44, 
            45
        ],
        colore:[
            "White",
            "Blue"
        ],
        description:[
            "Two-tone golf shoes  in white/blue full grain leather. Perforated dovetail tip. Breathable calfskin lining with antibacterial membrane. Rubber sole with studs assembled with Blake stitching.",
            "Customizable  with initials engraving on the side of the shoe. Enter your text in Product Personalization below. Shoes with customization cannot be returned or exchanged."
        ],
        sole: "Laces",
        closure: "Laces",
        upper: "leather",
        lining: "Leather",
        gender: "male",
    },
    {
        id:2,
        image: zapato2,
        name: "Men's two-tone white/black handcrafted leather golf shoes",
        price: 420,
        sizes: [
            39, 
            40, 
            41, 
            42, 
            43, 
            44, 
            45
        ],
        colore:[
            "White",
            "Black"
        ],
        description:[
            "Two-tone golf shoes  in white/black full grain leather. Perforated dovetail tip. Breathable calfskin lining with antibacterial membrane. Rubber sole with studs assembled with Blake stitching.",
            "Customizable  with initials engraving on the side of the shoe. Enter your text in Product Personalization below. Shoes with customization cannot be returned or exchanged."
        ],
        sole: "Rubber",
        closure: "Laces",
        upper: "leather",
        lining: "Leather",
        gender: "male",
    }
];

export function getProductById (id){
return productsData.find((product) => product.id === id)
};
