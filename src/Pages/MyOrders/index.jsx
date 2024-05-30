import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';
import OrdersCard from "../../Componets/OrdersCard"


function MyOrders() {
  const context = useContext(ShoppingCartContext);
  
    return (
      <Layout>
        <div className='flex w-80 justify-center relative'>
            <h1>My Orders</h1>
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