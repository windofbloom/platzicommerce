import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom";


function MobileNavLinks () {
    const context = useContext(ShoppingCartContext);
    const activeStyle = {
        textDecoration: 'underline underline-offset-4',
    };

    return(
        <>
            <ul>
            <li className="font-semibold">
                <NavLink 
                    to='/' 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                onClick={() => context.setSearchByCategory()}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/jewelery'
                onClick={() => context.setSearchByCategory('jewelery')}>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink to='/women-clothing'
                onClick={() => context.setSearchByCategory("women's clothing")}>
                    Women Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/men-clothing'
                onClick={() => context.setSearchByCategory("men's clothing")}>
                    Men Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'
                onClick={() => context.setSearchByCategory('electronics')}>
                    Electronics
                </NavLink>
            </li>
        </ul>

        <ul>
            <li className="font-semibold">shopi@shopi.com</li>
            <li>
                <NavLink to='/my-orders'>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sign-in'>
                    Sign In
                </NavLink>
            </li>
        </ul>
        </>
    )
}

export default MobileNavLinks