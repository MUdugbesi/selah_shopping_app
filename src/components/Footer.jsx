import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BiLogoPlayStore } from "react-icons/bi";
const Footer = () => {
  return (
    <div className='w-full h-[165px] bg-white flex relative bottom-0 mt-[100px]'>
      <div className='flex w-[60%] justify-between mx-auto items-center'>
        <div className='flex w-[20%] justify-evenly items-center'>
          <h1 className='font-italiana text-[30px]'><Link to='/'>SELAH</Link></h1>
          <div className='flex opacity-60 w-1/3'>
            <Link className='mr-1'><FaTwitter /></Link>
            <Link className='mr-1'><FaInstagram /></Link>
            <Link> <BiLogoPlayStore /></Link>
          </div>
        </div>
        <div className='w-[20%] flex justify-evenly p-3 font-ibm-plex-sans font-light'>
          <Link to='/'>HOME</Link>
          <Link to='/'>SHOP</Link>
          <Link to='/'>FAQ</Link>

        </div>
      </div>

    </div>

  )
}

export default Footer