import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';
import OrdersCard from "../../Componets/OrdersCard"


function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
    return (
      <Layout>
        <div className='flex bg-gray-900 w-full p-4 justify-center relative mb-4 -m-4'>
            <h1 className='font-serif font-light text-xl text-white uppercase tracking-wide text-center'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalProducts} 
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </Layout>
    )
  }
  
  export default MyOrders