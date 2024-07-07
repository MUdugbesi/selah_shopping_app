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
            <div className='flex justify-start items-center'>
                <img src={detail.img} className='object-contain size-20' />
                <div className='font-lato'>
                    <p className='text-sm w-[30%] text-center mb-2'>{detail.name}</p>
                    <p>{quantity} x <span className='text-[#00000087] font-[300]'>${detail.price}</span></p>
                </div>
            </div>

            <div className='flex gap-5 items-center justify-evenly border-2 border-slate-500 w-[100px] h-[40px] rounded-lg'>
                <button className='border-r-2 h-full w-[30%] bg-gray-200 rounded-l-md text-xl flex justify-center items-center' onClick={handleMinusQty}>{quantity > 1 ? '-' : <MdDelete />}</button>
                <p>{quantity}</p>
                <button className='border-l-2 h-full w-[30%] bg-gray-200 rounded-r-md text-xl' onClick={handlePlusQty}>+</button>
            </div>
        </div>
    )
}

export default CartTabItem