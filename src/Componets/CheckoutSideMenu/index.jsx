import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { IconX } from '@tabler/icons-react';

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
        flex flex-col fixed right-0 border bg-white
                 border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <IconX className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
            </div>
            <div>
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg'
                        src={context.productToShow.image}
                        alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl'>{context.productToShow.title}</span>
                    <span className='font-medium text-md'>{context.productToShow.price}</span>
                    <span className='font-light text-sm'>{context.productToShow.description}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;