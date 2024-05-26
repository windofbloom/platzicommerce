import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Componets/OrderCard';

import { IconX } from '@tabler/icons-react';
import './style.css'

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext);

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
                scrollable-cards flex-col fixed top-20 z-50 shadow-lg right-0 border bg-white
                 border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <IconX 
                    className='cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu()} />
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;