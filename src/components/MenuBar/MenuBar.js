import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Menubar = ({menuItems}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap p-1 bg-gradient-to-r from-green-400 to-blue-500 text-white'>
      <Link href='/'>
        <div className='inline-flex items-center p-2 mr-4 '>
          <img className="w-20 h-14 ml-2" src="/logo.png"/>
          <span className='text-xl ml-8 text-white font-bold uppercase tracking-wide'>
            <h1> Haligonia Dance Academy </h1>
          </span>
        </div>
      </Link>
      <button
        className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          {menuItems && menuItems.map((menu) => (
            <Link href={menu.href}>
              <a onClick={() => menu.event && localStorage.removeItem('accessToken')} className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                {menu.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;