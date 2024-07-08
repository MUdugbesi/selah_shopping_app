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
            <div className='w-full h-[400px] flex flex-col mx-auto pb-[10px] bg-white rounded-xl p-5 shadow-sm shadow-[white] justify-evenly items-center'>
                <div className='h-[auto] w-[300px] flex justify-center items-center'>
                    <Link to={slug}>
                        <img src={img} className='w-[199px] h-[164px] object-contain object-center mx-auto md:drop-shadow-[0_80px_30px_#0007] bg-transparent' />
                    </Link>
                </div>
                <div className='flex flex-col w-full h-[50px] justify-start relative mt-5 pl-5'>
                    <span className='text-sm tracking-wider'>{name}</span>
                    <span className='font-lato font-[300]'>${price}</span>
                </div>
                <div className='w-[82%]'>
                    <button className='flex w-full h-[40px] font-lato mx-auto gap-3 justify-center items-center bg-button p-2 rounded-xl text-[12px] md:text-sm text-white mt-5 hover:cursor-pointer hover:opacity-95 active:text-red-600' onClick={handleAddToCart}><FaCartPlus color='#fff' className='size-3 md:size-4 lg:size-5'/>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Card