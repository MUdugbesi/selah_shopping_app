import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa6';
import { addTocart } from '../store/cart';

const Details = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector(store => store.product.products)

    useEffect(() => {
        const findDetails = products.filter((pd) => pd.slug === slug);
        if (findDetails.length > 0) {
            setDetail(findDetails[0])
        } else {
            navigate('/')
        }
    }, [slug])

    const handleMinusQty = () => {
        setQuantity(quantity - 1 < 1 ? 0 : quantity - 1)

    }
    const handlePlusQty = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = () => {
        dispatch(addTocart({
            productId: detail.id,
            quantity: quantity
        }))
    }


    return (
        <>
            <p className='font-ibm-plex-sans text-[13px] flex w-[40%] md:w-[25%] lg:w-[15%] mx-auto justify-evenly font-light mt-[60px] mb-[60px]'>
                <span>Home</span>
                <span>/</span>
                <span>Shop</span>
                <span>/</span>
                <span>Product</span>
            </p>

            <div className='w-[80%] lg:w-[60%] mx-auto h-[auto] grid md:grid-cols-2 mb-[20px] bg-white p-10'>
                <img src={detail.img} className='md:h-96 w-[80%] mx-auto object-contain  object-bottom lg:drop-shadow-[0_40px_30px_#0007] drop-shadow-[0_20px_20px_#0007]' />
                <div className='p-2'>
                    <p className='text-[60px] font-lato font-[100] opacity-50 pt-5'>${detail.price}</p>
                    <div className='flex w-full h-[40px] justify-start items-center relative mt-10'>
                        <span className='opacity-50 font-lato font-light text-[14px] mr-6 after:content-[""] after:absolute after:bottom-0 after:left-8 after:bg-text after:h-[90%] after:w-[1px] after:opacity-50 after:z-10 after:rounded-lg'>❤️</span>
                        <span className='uppercase text-sm tracking-wider'>{detail.name}</span>
                    </div>
                    <p className='font-lato text-[12px] font-light leading-5 text-black opacity-50'>{detail.description}</p>
                    <div className='w-[80%] lg:w-[50%] h-auto flex gap-[2px] mt-[50px]'>
                        <div className='border border-text rounded-l-sm md:w-[40%] w-[30%] flex justify-evenly h-[35px] items-center gap-1 font-lato bg-[#00000018] hover:cursor-pointer hover:opacity-80'>
                            <span className='md:text-[25px] text-sm' onClick={handleMinusQty}>-</span>
                            <span className='md:text-[16px] text-sm'>{quantity}</span>
                            <span className='md:text-[20px] text-sm' onClick={handlePlusQty}>+</span>
                        </div>
                        <button className='flex md:w-[60%] h-[35px] font-lato mx-auto gap-3 justify-center items-center text-button p-2 border border-text rounded-r-sm text-sm hover:cursor-pointer hover:opacity-80 active:text-red-600' onClick={handleAddToCart}><FaCartPlus size={18} className='text-button' />Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details