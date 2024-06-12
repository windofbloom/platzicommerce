import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

import { IconX } from '@tabler/icons-react';

function ProductDetail () {
    const context = useContext(ShoppingCartContext);


    return (
        <section 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}
                 flex-col fixed rounded-lg
                 bg-white border border-black w-full max-w-lg md:max-w-3xl lg:max-w-4xl 
    transition-opacity mx-auto`}>
            <div className='flex justify-between items-center p-4 md:p-6'>
                <h2 className='font-medium text-lg md:text-xl font-mono'>Product Details</h2>
                <IconX className='cursor-pointer'
                onClick={() => context.closeProductDetial()}/>
            </div>
            <div>
                <figure className='relative mb-2 w-full h-48 md:h-60 lg:h-80 object-cover object-center px-4 md:px-6'>
                    <img className='w-full h-full object-cover rounded-lg'
                        src={context.productToShow.image}
                        alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-4 md:p-6'>
                    <span className='font-medium text-xl md:text-2xl text-gray-900 font-serif'>{context.productToShow.title}</span>
                    <span className='font-bold text-2xl md:text-3xl lg:text-4xl my-2 font-mono'>{context.productToShow.price}</span>
                    <span className='font-light text-sm md:text-base font-mono'>{context.productToShow.description}</span>
                </p>
          </div>
        </section>
    )
}

export default ProductDetail