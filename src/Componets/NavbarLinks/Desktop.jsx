import { useContext, useState, useEffect } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom";

import { IconShoppingBag, IconMenu2, IconX } from '@tabler/icons-react';

function DesktopNavLinks () {

    const context = useContext(ShoppingCartContext);
    const activeStyle = {
        textDecoration: 'underline underline-offset-4',
    };

    return (
        <>
        <ul className="hidden md:flex item-center gap-3">
            <li className="font-semibold">
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/' 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewelery' 
                    onClick={() => context.setSearchByCategory('jewelery')}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/women-clothing' 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Women Clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/men-clothing' 
                    onClick={() => context.setSearchByCategory('')}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Men Clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/electronics' 
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Electronics
                </NavLink>
            </li>
        </ul>

        <ul className="hidden md:flex items-center gap-3">
            <li className="font-semibold">shopi@shopi.com</li>
            <li>
                <NavLink to='/my-orders' className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account' className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in' className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Sign In
                </NavLink>
            </li>
            <li className="flex justify-center items-center">
                <IconShoppingBag /> {context.count}
            </li>
        </ul>
        
        </>
    )
}

export default DesktopNavLinks