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
        <div className="flex justify-between items-center mb-3 w-86 bg-white 
            font-mono p-2 border border-black rounded-lg">
            <div className='flex items-center gap-4'>
                <figure className='w-20 h-20 object-cover'>
                    <img className='w-full h-full rounded-lg object-cover' 
                    src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light font-mono'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='font-medium text-xl flex justify-between
                    items-center gap-2'>${price}</p>
                {renderIconX}
            </div>
        </div>
    )
}

export default OrderCard 