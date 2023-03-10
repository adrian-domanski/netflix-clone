import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import Link from 'next/link';
import BasicMenu from './BasicMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex item-center space-x-2 md:space-x-10'>
        {/* This is an svg thats why I don't use <Image /> */}
        <Image
          src='/img/logo.png'
          alt='Netflix'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <BasicMenu />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
      <div className='flex item-center space-x-4 text-sm font-light'>
        <AiOutlineSearch className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <FaBell className='h-6 w-6' />
        <Link href='/account'>
          <img
            src='/img/face.png'
            alt=''
            className='cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
