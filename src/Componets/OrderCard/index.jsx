import { IconX } from '@tabler/icons-react';

function OrderCard (props) {
    const { id, title, imageURL, price, handleDelete } = props;

    return(
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' 
                    src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <IconX 
                    className='cursor-pointer'
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    )
}

export default OrderCard