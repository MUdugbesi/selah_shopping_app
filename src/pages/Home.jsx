import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import { ProductCard } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Home = () => {
    const products = useSelector(store => store.product.products);
    const [filter, setFilter] = useState(products);
    const [toggleOther, setToggleOther] = useState(false)

    const handleAccessories = (e) => {
        const accessories = []
        products.forEach((product) => {
            const { categories } = product;
            if (categories) {
                if (categories.includes('accessories')) {
                    accessories.push(product)
                }
            }
        })
        e.target.classList.add('opacity-100')

        setFilter(accessories)
    }

    const handleAll = () => {
        setFilter(products)
        e.target.classList.remove('opacity-50')
    }

    const handleOthersDisplay = () => {
        setToggleOther(!toggleOther)
    }

    return (
        <div className='w-full h-auto'>
            <div className='w-[50%] md:w-[30%] lg:w-[10%] mx-auto mt-[40px] md:mt-[85px] flex flex-col max-lg:items-center'>
                <h1 className='font-ibm-plex-sans text-[50px] text-justify tracking-[12px] font-[200]'>SHOP</h1>
                <p className='font-ibm-plex-sans text-[13px] flex w-[80%] mx-auto justify-evenly font-light'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                </p>
            </div>

            <div className='hidden md:flex lg:w-[30%] md:w-[50%] mt-14 mb-14 h-auto mx-auto justify-evenly hover:cursor-pointer font-ibm-plex-sans font-[600]'>
                <Link onClick={handleAll} >ALL</Link>
                <Link onClick={handleAccessories}>ACCESSORIES</Link>
                <Link>MALE</Link>
                <Link>FEMALE</Link>
                <Link>UNISEX</Link>
            </div>
            <div className='w-[60%] flex flex-col md:hidden mt-14 mb-14 h-auto mx-auto justify-center items-center hover:cursor-pointer font-ibm-plex-sans font-[600] text-[#0000007b]'>
                <div className='flex w-[100%] justify-evenly items-center pb-3'>
                    <Link onClick={handleAll} >ALL</Link>
                    <Link>MALE</Link>
                    <Link>FEMALE</Link>
                    {!toggleOther ? <MdKeyboardArrowDown width={20} className='hover' onClick={handleOthersDisplay} /> : <MdKeyboardArrowUp width={20} className='hover' onClick={handleOthersDisplay} />}
                </div>
                <div className={`${toggleOther ? 'flex w-[100%] justify-evenly items-center' : 'hidden'}`}>
                    <Link onClick={handleAccessories} className='opacity-100'>ACCESSORIES</Link>
                    <Link>UNISEX</Link>
                </div>
            </div>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-10 w-full p-10 md:p-0 lg:w-[80%] md:w-[90%] mx-auto h-auto'>

                {filter.map((product, key) => {
                    return (
                        <ProductCard data={product} key={key} />
                    )
                })}
            </div>

            <div>

            </div>
        </div >
    )
}

export default Home