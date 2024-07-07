import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addTocart } from '../store/cart';


const Card = (props) => {
    const { id, name, img, price, slug } = props.data;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addTocart({
            productId: id,
            quantity: 1
        }))
    }
    return (
        <>
            <div className='w-full h-[auto] flex flex-col mx-auto pb-[30px] bg-white rounded-lg p-4 shadow-md shadow-button'>
                <Link to={slug}>
                    <img src={img} className='w-[80%] object-contain object-center mx-auto' />
                </Link>
                <div className='flex flex-col w-full h-[50px] justify-start relative mt-5 pl-10'>
                    <span className='text-sm tracking-wider'>{name}</span>
                    <span className='font-lato font-[300]'>${price}.00</span>
                </div>
                <div>
                    <button className='flex w-[80%] h-[40px] font-lato mx-auto gap-3 justify-center items-center bg-button p-2 rounded-xl text-sm text-white mt-5 hover:cursor-pointer hover:opacity-95 active:text-red-600' onClick={handleAddToCart}><FaCartPlus size={24} color='#fff' />Add to Cart</button>

                </div>
            </div>
        </>
    )
}

export default Card