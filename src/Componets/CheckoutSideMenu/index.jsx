import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Componets/OrderCard';
import { totalPrice } from '../../utils'

import { IconX } from '@tabler/icons-react';
import './style.css'

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts)
    }

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
            <div className='px-6'>
            {
                context.cartProducts.map((product, index) => (
                    <OrderCard 
                        key={`${product.id}-${index}`}
                        id={product.id}
                        title={product.title}
                        imageURL={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)} </span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;