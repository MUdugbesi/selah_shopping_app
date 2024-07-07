import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import { ProductCard } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Home = () => {
    const products = useSelector(store => store.product.products)

    return (
        <div className='w-full h-auto'>
            <div className='w-[10%] mx-auto mt-[85px]'>
                <h1 className='font-ibm-plex-sans text-[50px] text-justify tracking-[12px] font-[200]'>SHOP</h1>
                <p className='font-ibm-plex-sans text-[13px] flex w-[80%] mx-auto justify-evenly font-light'>
                    <span>Home</span>
                    <span>/</span>
                    <span>Shop</span>
                </p>
            </div>
            <div className='flex w-[30%] mt-14 mb-14 h-auto mx-auto justify-evenly hover:cursor-pointer font-ibm-plex-sans font-[600]'>
                <Link>ALL</Link>
                <Link>ACCESSORIES</Link>
                <Link>MALE</Link>
                <Link>FEMALE</Link>
                <Link>UNISEX</Link>
            </div>

            <div className='grid grid-cols-4 gap-10 w-[80%] mx-auto h-auto'>

                {products.map((product, key) => {
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