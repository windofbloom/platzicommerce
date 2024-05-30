import { IconChevronsRight } from '@tabler/icons-react';
import { IconCalendar } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';

function OrdersCard (props) {
    const { totalPrice, totalProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 
        border border-black p-4 rounded-lg w-80">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                <span className='flex justify-between items-center gap-2 mb-2'><IconCalendar /> 01.02.23</span>
                <span className='font-light flex justify-between items-center gap-2'><IconShoppingCart /> {totalProducts} articles</span>
                </div>
                <span className='font-medium text-2xl flex justify-between
                    items-center gap-2'>${totalPrice}
                    <IconChevronsRight />
                </span>
            </div>
        </div>
    )
}

export default OrdersCard