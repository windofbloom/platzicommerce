import { IconX } from '@tabler/icons-react';

function OrderCard (props) {
    const { id, title, imageURL, price, handleDelete } = props;
    let renderIconX

    if (handleDelete) {
        renderIconX = <IconX 
        className='cursor-pointer'
        onClick={() => handleDelete(id)}
    />
    }

    return(
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' 
                    src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light font-mono'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium font-mono'>{price}</p>
                {renderIconX}
            </div>
        </div>
    )
}

export default OrderCard 