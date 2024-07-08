import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../store/cart';

import { MdDelete } from "react-icons/md";

const CartTabItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(store => store.product.products)

    useEffect(() => {
        const findDetail = products.filter(prdt => prdt.id === productId)[0];
        setDetail(findDetail)
    }, [productId]);

    const handleMinusQty = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1 < 1 ? 0 : quantity - 1
        }))

    }
    const handlePlusQty = () => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }

    return (
        <div className='w-full h-[150px] mx-auto border-b-2 flex justify-between items-center'>
            <div className='flex justify-start items-center w-full'>
                <img src={detail.img} className='object-contain size-20' />
                <div className='font-lato w-[50%] flex flex-col items-center'>
                    <p className='text-sm w-full text-center mb-2'>{detail.name}</p>
                    <p>{quantity} x <span className='text-[#00000087] font-[300]'>${detail.price}</span></p>
                </div>
            </div>

            <div className='rounded-l-sm w-[30%] lg:w-[40%] flex justify-evenly h-[35px] items-center gap-1 font-lato bg-[#00000018] hover:cursor-pointer hover:opacity-80'>
                <span className='md:text-[25px] text-sm' onClick={handleMinusQty}>{quantity > 1 ? '-' : <MdDelete className='size-4'/>}</span>
                <span className='md:text-[16px] text-sm'>{quantity}</span>
                <span className='md:text-[20px] text-sm' onClick={handlePlusQty}>+</span>
            </div>
        </div>
    )
}

export default CartTabItem