import { useContext } from 'react';
import { Link } from 'react-router-dom';
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

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            productos: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.closeCheckoutSideMenu()

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
                scrollable-cards flex-col fixed top-20 z-50 shadow-lg right-0 border bg-white
                 border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <p className='font-medium text-2xl font-serif'>My Order</p>
                <IconX 
                    className='cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div className='px-6 flex-1'>
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
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light font-mono'>Total:</span>
                    <span className='font-medium text-2xl font-mono'>${totalPrice(context.cartProducts)} </span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className='bg-gray-900 font-mono py-3 text-white rounded-lg w-full '
                        onClick={() => handleCheckout()}>
                            Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;