import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

import { IconX } from '@tabler/icons-react';

function ProductDetail () {
    const context = useContext(ShoppingCartContext);


    return (
        <section 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}
                 flex-col fixed rounded-lg
                 bg-white border border-black w-[calc(70vh-90px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Product Details</h2>
                <IconX className='cursor-pointer'
                onClick={() => context.closeProductDetial()}/>
            </div>
            <div>
                <figure className=' px-6'>
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
        </section>
    )
}

export default ProductDetail