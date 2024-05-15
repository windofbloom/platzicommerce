import { NavLink } from "react-router-dom";

const NavRightComponet = [
    { name: 'Shopi', path: '/' },
    { name: 'All', path: '/' },
    { name: 'Clothes', path: '/clothes' },
    { name: 'Women', path: '/women' },
    { name: 'Girls', path: '/girls' }
];

const NavLeftComponet = [
    { name: 'My Orders', path: '/my-orders' },
    { name: 'My Account', path: '/my-account' },
    { name: 'Sign In', path: '/sign-in' }
];

function Navbar() {
    const activeStyle = {
        textDecoration: "underline underline-offset",
    };

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full 
        py-5 px-8 text-sm font-light">
            <ul className="flex item-center gap-3">
                {NavRightComponet.map((Component, index) => (
                    <li key={index} className={index === 0 ? 'font-semibold': ''}>
                        <NavLink to={Component.path} 
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
                    shpi@shopi.com
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
                <li>
                    Carrito de compra
                </li>
            </ul>
        </nav>
    );
}

export { Navbar};