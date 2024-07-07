import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import blackBag from '../assets/images/addidas_bag_one.png'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            { id: uuid(), name: 'BackPack', price: 39.00, img: blackBag, slug: "black_backpack", description: 'They quickly darken in sunlight and fade back to clear indoors: protecting you from UV rays and filtering blue-violet light.' },

            { id: uuid(), name: 'Glasses', price: 25.00, img: blackBag, slug: "glasses_black" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
            { id: uuid(), name: 'Black BackPack', price: 39.00, img: blackBag, slug: "black_backpack" },
        ],
        checkout: []
    },

    reducers: {

    }
})

export default ProductSlice.reducer;