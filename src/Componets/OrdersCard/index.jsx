import {  } from '@tabler/icons-react';

function OrdersCard (props) {
    const { totalPrice, totalProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 borde border-black">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard