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
        </section>
    )
}

export default ProductDetail