import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FiSearch } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';

import { toggleStatusBar } from '../store/cart';

const Header = () => {
  const [totalQty, setTotalQty] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();


  useEffect(() => {
    let total = 0;
    carts.forEach((item) => total += item.quantity)
    setTotalQty(total)
  }, [carts]);



  const handleStatusTab = () => {
    dispatch(toggleStatusBar())
  }


  return (
    <div className='w-full h-[120px] bg-white flex items-center justify-evenly'>
      <h1 className='font-italiana text-[30px]'><Link to='/'>SELAH</Link></h1>
      <div className='w-[20%] flex justify-evenly p-3 font-ibm-plex-sans font-light'>
        <Link to='/'>HOME</Link>
        <Link to='/'>SHOP</Link>
        <Link to='/'>FAQ</Link>

      </div>
      <div className="flex relative p-2 gap-[20px] items-center justify-between w-[100px] after:content-[''] after:absolute after:top-0 after:left-12 after:bg-secondary after:h-[100%] after:w-1 after:z-10 after:rounded-lg">
        <FiSearch size={20} className='hover' />
        <MdShoppingCart size={20} className='hover' onClick={handleStatusTab} />
        <p className='text-white bg-red-600 rounded-full w-4 h-4 flex justify-center items-center absolute top-[24px] right-[15px] text-[12px] font-lato'>{totalQty}</p>
      </div>
    </div>
  )
}

export default Header