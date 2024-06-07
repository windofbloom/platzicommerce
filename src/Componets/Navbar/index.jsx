import { useContext, useState, useEffect } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom";

import { IconShoppingBag, IconMenu2, IconX } from '@tabler/icons-react';

const NavRightComponet = [
 { name: 'All', path: '/' },
 { name: 'Jewerly', path: '/jewerly' },
 { name: 'Women Clothing', path: '/women-clothing' },
 { name: 'Men Clothing', path: '/men-clothing' },
 { name: 'Electronics', path: '/electronics' }
];

const NavLeftComponet = [
 { name: 'shopi@shopi.com' },
 { name: 'My Orders', path: '/my-orders' },
 { name: 'My Account', path: '/my-account' },
 { name: 'Sign In', path: '/sign-in' }
];

function Navbar() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = {
        textDecoration: "underline underline-offset",
 };

 const [isOpen, setIsOpen] = useState(false);
 
 const toggleNavbar = () => {
    setIsOpen(!isOpen);
 }
 
 return(
    <>
<nav className="flex justify-between items-center fixed z-10 w-full 
        py-5 px-8 text-sm font-light top-0 bg-black text-white">

        <ul className="hidden md:flex item-center gap-3">
            <li className="font-semibold">
                <a href="/">Shopi</a>
            </li>

            {NavRightComponet.map((Component, index) => (
                <li key={index} className={index === 0 ? '': ''}>
                <NavLink to={Component.path} 
                onClick={() => context.setSearchByCategory('Component.name')}
                className={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>
                {Component.name}
                </NavLink>
                 </li>
            ))}
        </ul>

        <ul className="hidden md:flex items-center gap-3">
         {NavLeftComponet.map((Component, index) => (
            <li key={index}>
            <NavLink to={Component.path} key={index}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
            }>
                {Component.name}
            </NavLink>
         </li>
            ))}
        <li className="flex justify-center items-center">
            <IconShoppingBag /> {context.count}
        </li>
        </ul>

        <div className="md:hidden flex justify-between items-center gap-3">
            <button onClick={toggleNavbar}>
                {isOpen ? <IconX /> : <IconMenu2 />}
            </button>
            <div className="flex items-center">
                <IconShoppingBag /> {context.count}
            </div>
        </div>
    </nav>
    {
      isOpen && (
       <div className="mt-3 bg-black text-white w-full fixed top-0 left-0 z-10 p-11">
          <ul className="flex flex-col items-start gap-3">
            <div className="-mt-6 mb-5">
                    <button onClick={toggleNavbar}>
                        <IconX />
                    </button>
            </div>
             {NavRightComponet.map((Component, index) => (
                 <li key={index}>
                    <NavLink to={Component.path}
                       onClick={() => context.setSearchByCategory(Component.name)}
                       className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }>
                      {Component.name}
                      </NavLink>
                  </li>
              ))}
              {NavLeftComponet.map((Component, index) => (
                <li key={index}>
                    <NavLink to={Component.path} key={index}
                      className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                      }>
                      {Component.name}
                    </NavLink>
                </li>
              ))}
         </ul>
      </div>
                )
    }
</>
    );
}

export default Navbar