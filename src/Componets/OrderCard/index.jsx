import { IconX } from '@tabler/icons-react';

function OrderCard (props) {
    const { title, imageURL, price } = props;

    return(
        <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' 
                    src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <IconX className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default OrderCard