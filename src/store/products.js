import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import BlackBag from '../assets/images/addidas_bag_one.png'
import PinkBag from "../assets/images/pink_bag_chanel.png";
import GreenBag from "../assets/images/green_bag_chanel.png";
import ToteBag from "../assets/images/tote_bag.png";
import LVbag from "../assets/images/lv_bag-3.png";
import CK_dress from "../assets/images/cocktail_dress.png";
import GoldSunglass from "../assets/images/gold_sunglass.png";
import BlackSunglass from "../assets/images/black_sunglass.png";
import MirrorSunglass from "../assets/images/mirror_sunglass.png";
import BlackHoodie from '../assets/images/black_hoodie.png';
import WhiteTop from '../assets/images/white_top.png';
import BlackShirt from '../assets/images/black_shirt.png';
import PinkHeel from '../assets/images/pink_heel.png';
import OxfordMenShoe from '../assets/images/oxford_men_shoe.png'
import NikeShoeWomen from '../assets/images/nike_shoe_women.png'


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            { id: uuid(), name: 'Black Adiddas Backpack', price: 39.00, img: BlackBag, slug: "black_backpack", description: 'They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering blue-violet light.' },

            {
                id: uuid(), name: 'Pink Chanel Bag', price: 25.99, description: 'Chanel Wallet Coin purse Brand',
                slug: 'pink_bag_chanel', img: PinkBag,
                keywords: ['Chanel', 'bag', 'pink', 'purse', 'female', 'models', 'rectangle', 'bags', 'shopping Bag'],
                categories: ['female', 'accessories']

            },
            {
                id: uuid(), name: 'Black Sunglass', price: 27.99, description: 'They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering blue-violet light',
                slug: 'sunglass_black', img: BlackSunglass,
                keywords: ['unisex', 'glass', 'black', 'fashion', 'gold', 'eyewear'],
                categories: ['unisex', 'accessories', 'male', 'female']
            },
            {
                id: uuid(), name: 'Green Chanel Bag', price: 40.99, description: 'Chanel Handbag Fashion Spring',
                slug: 'green_bag_chanel', img: GreenBag,
                keywords: ['Chanel', 'bag', 'green', 'purse', 'female', 'models', 'rectangle', 'bags', 'leather'],
                categories: ['female', 'accessories']

            },
            {
                id: uuid(), name: 'Tote Handbag', price: 30.99, description: 'Tote bag Kate Spade New York Handbag',
                slug: 'tote_bag', img: ToteBag,
                keywords: ['bag', 'purse', 'female', 'rectangle', 'leather', 'blue',],
                categories: ['female', 'accessories']
            },

            {
                id: uuid(), name: 'Mirrored Sunglass', price: 27.99, description: 'They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering blue-violet light',
                slug: 'sunglass_mirrored', img: MirrorSunglass,
                keywords: ['unisex', 'glass', 'black', 'fashion', 'gold', 'eyewear'],
                categories: ['unisex', 'accessories', 'male', 'female']
            },
            {
                id: uuid(), name: 'LV Backpack', price: 45.99, description: 'Louis Vuitton Backpack Handbag Zipper',
                slug: 'lv_backpack', img: LVbag,
                keywords: ['bag', 'purse', 'female', 'rectangle', 'luggage Bags', 'leather', 'blue',],
                categories: ['female', 'accessories']
            },
            {
                id: uuid(), name: 'Gold Rim Sunglass', price: 25.99, description: 'They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering blue-violet light',
                slug: 'sunglass_gold', img: GoldSunglass,
                keywords: ['unisex', 'glass', 'black', 'fashion', 'gold', 'eyewear'],
                categories: ['unisex', 'accessories', 'male', 'female']
            },
            {
                id: uuid(), name: 'Cocktail Dress', price: 45.99, description: 'Evening gown Cocktail dress',
                slug: 'cocktail_dress', img: CK_dress,
                keywords: ['female', 'dress', 'blue', 'fashion', 'Gown'],
                categories: ['female',]
            },
            {
                id: uuid(), name: 'Black Shirt', price: 35.99, description: 'Black T-shirt',
                slug: 'black_shirt', img: BlackShirt,
                keywords: ['Clothing', 'shirt', 'tshirt', 'black', 'formal Wear'],
                categories: ['male']
            },
            {
                id: uuid(), name: 'White Top', price: 24.99, description: 'White Crew - Neck shirt',
                slug: 'white_shirt', img: WhiteTop,
                keywords: ['Clothing', 'shirt', 'polo', 'black', 'formal Wear',],
                categories: ['male']
            },
            {
                id: uuid(), name: 'Black Hoodie', price: 45.99, description: 'Hoodie T - shirt Supreme Bluza',
                slug: 'black_hoodie', img: BlackHoodie,
                keywords: ['Clothing', 'shirt', 'polo', 'black', 'hoodie'],
                categories: ['male', 'unisex']
            },
            {
                id: uuid(), name: 'Nike Women Sneakers', price: 25.99, description: 'Nike Free Shoe Sneakers Running',
                slug: 'nike_shoe', img: NikeShoeWomen,
                keywords: ['female', 'shoe', 'outdoor', 'grey',],
                categories: ['female',]
            },
            {
                id: uuid(), name: 'Suede Men Shoe', price: 25.99, description: 'Oxford Men Suede Shoe - Footwear Brogue',
                slug: 'oxford_shoe', img: OxfordMenShoe,
                keywords: ['shoe', 'oxford', 'outdoor', 'black',],
                categories: ['male',]
            },
            {
                id: uuid(), name: 'Court shoe High-heeled', price: 25.99, description: 'Women leather Stiletto high-heel shoe',
                slug: 'oxford_shoe', img: PinkHeel,
                keywords: ['shoe', 'stiletto', 'outdoor', 'pink', 'fashion', 'leather', 'high-heel'],
                categories: ['female',]
            },

        ],
        checkout: []
    },

    reducers: {

    }
})

export default ProductSlice.reducer;



// [
//     {
//         id: uuid(), name: 'Pink Bag', price: 25, description: 'Chanel Wallet Coin purse Brand',
//         slug: 'pink_bag_chanel', img: PinkBag,
//         keywords: ['Chanel', , 'bag', 'pink', 'purse', 'female', 'models', 'rectangle', 'bags', 'shopping Bag'],
//         categories: [female, accessories]

//     }
// ]