import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FiSearch } from 'react-icons/fi';
import { MdMenu, MdOutlineClose, MdShoppingCart } from 'react-icons/md';

import { toggleStatusBar } from '../store/cart';
import { toggleMenuBar } from '../store/products';

const Header = () => {
  const [totalQty, setTotalQty] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const menuBar = useSelector(store => store.product.menuBar)

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => total += item.quantity)
    setTotalQty(total)
  }, [carts]);


  const hanldeMenuBar = () => {
    dispatch(toggleMenuBar())
  }

  const handleStatusTab = () => {
    dispatch(toggleStatusBar())
  }


  return (
    <div className='w-full h-[120px] bg-white flex items-center md:justify-evenly justify-between p-5 md:p-0'>
      <h1 className='font-italiana text-[30px]'><Link to='/'>SELAH</Link></h1>
      <div className='lg:w-[20%] md:w-[30%] md:flex justify-evenly p-3 font-ibm-plex-sans font-light hidden'>
        <Link to='/' className='relative hover:after:content-[""] hover:after:border-2 hover:after:border-[black] hover:after:rounded-md after:absolute after:right-0 after:bottom-[-2px] hover:after:w-full after:transition-all after:delay-75 after:duration-500'>HOME</Link>
        <Link to='/'>SHOP</Link>
        <Link to='/'>FAQ</Link>
      </div>

      {
        menuBar === true ?
          <div className='bg-[white] w-[60%] h-screen absolute top-[100px] right-0 z-10 p-10 font-lato'>
            <div className='flex flex-col w-[60%] items-center mx-auto gap-5 font-bold'>
              <Link to='/' className='relative after:content-[""] after:w-full after:h-1 after:border-2 after:border-[black] after:absolute after:rounded-md  after:right-0 after:bottom-[-2px] after:hidden hover:after:flex'>HOME</Link>
              <Link to='/' className='hover:underline'>SHOP</Link>
              <Link to='/' className='hover:underline'>FAQ</Link>
            </div>
          </div>
          : ''}

      <div className="flex relative p-2 gap-[20px] items-center justify-between w-[100px] after:content-[''] after:absolute after:top-0 after:left-12 after:bg-secondary after:h-[100%] after:w-1 after:z-10 after:rounded-lg">
        <FiSearch size={20} className='hover  hidden md:flex ' />
        <MdShoppingCart size={20} className='hover' onClick={handleStatusTab} />
        {!menuBar ? <MdMenu size={20} className='hover flex md:hidden' onClick={hanldeMenuBar} /> : <MdOutlineClose size={20} className='hover flex md:hidden' onClick={hanldeMenuBar} />}
        <p className='text-white bg-red-600 rounded-full w-3 h-3 md:w-4 md:h-4 flex justify-center items-center absolute top-[24px] md:right-[15px] text-[10px] md:text-[12px] font-lato'>{totalQty}</p>
      </div>
    </div>
  )
}

export default Header