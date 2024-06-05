import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom";

import { IconShoppingBag } from '@tabler/icons-react';

const NavRightComponet = [
 { name: 'All', path: '/' },
 { name: 'Jewerly', path: '/jewerly' },
 { name: 'Women Clothing', path: '/women-clothing' },
 { name: 'Men Clothing', path: '/men-clothing' },
 { name: 'Electronics', path: '/electronics' }
];

const NavLeftComponet = [
 { name: 'My Orders', path: '/my-orders' },
 { name: 'My Account', path: '/my-account' },
 { name: 'Sign In', path: '/sign-in' }
];

function Navbar() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = {
        textDecoration: "underline underline-offset",
 };

 return(
    <nav className="flex justify-between items-center fixed z-10 w-full 
        py-5 px-8 text-sm font-light top-0">
        <ul className="flex item-center gap-3">
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

    <ul className="flex items-center gap-3">
        <li className="text-black/60">
            shopi@shopi.com
        </li>

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
    </nav>
    );
}

export default Navbar