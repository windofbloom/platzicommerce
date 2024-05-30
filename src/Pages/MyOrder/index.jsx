import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Componets/Layout"
import { Link } from 'react-router-dom';

import OrderCard from '../../Componets/OrderCard';
import { IconChevronsLeft } from '@tabler/icons-react';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  const lastOrder = context.order?.slice(-1)[0];
  const products = lastOrder?.productos || [];

  return (
    <Layout>
      <div className='flex w-80 justify-center relative items-center mb-5'>
          <Link to='/my-orders' className='absolute left-0'>
            <IconChevronsLeft className='cursor-pointer'/>
          </Link>
            <h1>My Order</h1>
        </div>
      <div className='flex flex-col w-80'>
        {
          products.map((product, index) => (
            <OrderCard 
              key={`${product.id}-${index}`}
              id={product.id}
              title={product.title}
              imageURL={product.image}
              price={product.price}
            />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
