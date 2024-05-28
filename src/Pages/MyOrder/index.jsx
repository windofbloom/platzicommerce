import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Componets/Layout"

import OrderCard from '../../Componets/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const lastOrder = context.order?.slice(-1)[0];
  const products = lastOrder?.productos || [];

  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {products.map((product, index) => (
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
