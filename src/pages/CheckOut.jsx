import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Form from '../components/Form';

import { CheckoutCard } from '../components';

const CheckOut = () => {
    const carts = useSelector(store => store.cart.items);
    const products = useSelector(store => store.product.products)
    const [totalQty, setTotalQty] = useState(0);
    const [totalSum, setTotalSum] = useState(0);
    const VAT = 15;
    useEffect(() => {
        let total = 0;
        carts.forEach((item) => total += item.quantity)
        setTotalQty(total)
    }, [carts]);

    useEffect(() => {
        let sum = 0
        const inCart = [];
        carts.map((cart) => {
            const { productId, quantity } = cart;
            const pd = products.findIndex((prd) => prd.id === productId);
            const price = products[pd].price
            inCart.push(price * quantity)
        });
        for (let i = 0; i < inCart.length; i++) {
            sum += inCart[i]
        }
        setTotalSum(Number(sum.toFixed(2)))
    }, [carts])


    return (
        <>
            <p className='font-ibm-plex-sans text-[13px] flex w-[15%] mx-auto justify-evenly font-light mt-[85px] mb-[50px]'>
                <span>Home</span>
                <span>/</span>
                <span>Checkout</span>
            </p>
            <div className='w-[70%] mx-auto h-[auto] grid grid-cols-[65%_32%] gap-14 mb-[20px] font-lato'>
                <div className='w-full bg-[#fff] h-auto mx-auto'>
                    <p className='text-xl text-center mt-[50px] mb-[20px] tracking-[5px]'>BILLING DETAILS</p>
                    <Form />
                </div>

                <div className='w-full bg-[#fff] max-h-[auto] h-[500px] mx-auto pl-10'>
                    <p className='text-xl mt-[50px] mb-[20px] pr-5 tracking-[5px] uppercase'>Your Order</p>
                    {carts.map((cart, key) => {
                        return (
                            <CheckoutCard data={cart} key={key} />
                        )
                    })}
                    <hr className='w-[90%] h-1 mb-[20px] mt-[20px]' />
                    <p className='tracking-[1px] flex w-[50%] justify-between items-center mb-[10px]'><span className='text-[#0000008a] text-[15px] '>Subtotal</span> <span>{totalSum % 1 !== 0 ? '$' + totalSum : totalSum + .00}</span></p>
                    <p className='tracking-[1px] flex w-[90%] justify-start items-center mb-[10px] gap-10'><span className='text-[#0000008a] text-[15px]'>Shipping</span>
                        <span className='text-xs text-wrap uppercase text-[#00000081]'>{totalSum > 75 ? 'Eligible for free shipping' : `Spend Over $${(75 - totalSum).toFixed(2)} more for free shipping`}</span></p>

                    {totalSum < 75 ? <p className='tracking-[1px] flex w-[50%] justify-between items-center mb-[10px]'><span className='text-[#0000008a] text-[15px] '>VAT</span>
                        <span>${VAT}.00</span></p> : ""}

                    <p className='tracking-[1px] flex w-[50%] justify-between mb-[10px] items-center'><span className='text-[#0000008a] text-[15px] '>Total</span>
                        <span>{totalSum > 75 ? `$${totalSum}` : `$${(VAT + totalSum).toFixed(2)}`}</span></p>
                </div>
            </div>
        </>

    )
}

export default CheckOut