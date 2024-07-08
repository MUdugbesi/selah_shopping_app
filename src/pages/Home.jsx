import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import { ProductCard } from '../components';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Home = () => {
    const products = useSelector(store => store.product.products);
    const [filter, setFilter] = useState(products);
    const [toggleOther, setToggleOther] = useState(false);

    const handleAccessories = () => {
        const accessories = []
        products.forEach((product) => {
            const { categories } = product;
            if (categories) {
                if (categories.includes('accessories')) {
                    accessories.push(product)
                }
            }
        })
        setFilter(accessories)

    }
    const handleMale = () => {
        const male = []
        products.forEach((product) => {
            const { categories } = product;
            if (categories) {
                if (categories.includes('male')) {
                    male.push(product)
                }
            }
        })
        setFilter(male)
        console.log(filter)

    }
    const handleFemale = () => {
        const female = []
        products.forEach((product) => {
            const { categories } = product;
            if (categories) {
                if (categories.includes('female')) {
                    female.push(product)
                }
            }
        })
        setFilter(female)

    }
    const handleUnisex = () => {
        const unisex = []
        products.forEach((product) => {
            const { categories } = product;
            if (categories) {
                if (categories.includes('unisex')) {
                    unisex.push(product)
                } else {
                    return
                }
            }
        })
        setFilter(unisex)

    }

    const handleAll = (e) => {
        setFilter(products)
        console.log(products)

    }

    const handleOthersDisplay = () => {
        setToggleOther(!toggleOther)
    }

    return (
        <div className='w-full h-auto'>
            <div className='w-[50%] md:w-[30%] lg:w-[10%] mx-auto mt-[40px] md:mt-[85px] flex flex-col max-lg:items-center'>
                <h1 className='font-ibm-plex-sans text-[50px] text-justify tracking-[12px] font-[200] animate-pulse'>SHOP</h1>
                <p className='font-ibm-plex-sans text-[13px] flex w-[80%] mx-auto justify-evenly font-light text-[#0000007a]'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                </p>
            </div>

            <div className='hidden md:flex lg:w-[30%] md:w-[50%] mt-14 mb-14 h-auto mx-auto justify-evenly hover:cursor-pointer font-ibm-plex-sans text-[#000000c3] font-[400] '>
                <p onClick={handleAll} className={`hover:font-[600px] font-[900]`}>ALL</p>
                <p onClick={handleAccessories} className={`hover:font-[600]`}>ACCESSORIES</p>
                <p onClick={handleMale} className={`hover:font-[600]`}>MALE</p>
                <p onClick={handleFemale} className={`hover:font-[600]`}>FEMALE</p>
                <p onClick={handleUnisex} className={`hover:font-[600]`}>UNISEX</p>

            </div>
            <div className='w-[60%] flex flex-col md:hidden mt-14 mb-14 h-auto mx-auto justify-center items-center hover:cursor-pointer font-ibm-plex-sans font-[600] text-[#0000007b]'>
                <div className='flex w-[100%] justify-evenly items-center pb-3'>
                    <Link onClick={handleAll} >ALL</Link>
                    <Link onClick={handleMale}>MALE</Link>
                    <Link onClick={handleFemale}>FEMALE</Link>
                    {!toggleOther ? <MdKeyboardArrowDown width={20} className='hover' onClick={handleOthersDisplay} /> : <MdKeyboardArrowUp width={20} className='hover' onClick={handleOthersDisplay} />}
                </div>
                <div className={`${toggleOther ? 'flex w-[100%] justify-evenly items-center' : 'hidden'}`}>
                    <Link onClick={handleAccessories} className='opacity-100'>ACCESSORIES</Link>
                    <Link onClick={handleUnisex}>UNISEX</Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-10 w-[90%] p-10 md:p-0 lg:w-[80%] md:w-[95%] mx-auto h-auto'>

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