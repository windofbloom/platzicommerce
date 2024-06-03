import { useContext } from "react"
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';

/*COMPONENTS*/ 
import Card from "../../Componets/Card"
import ProductDetail from "../../Componets/ProductDetail";
import Search from "../../Componets/Search";


function Home() {

  const context = useContext(ShoppingCartContext);
  
    return (
      <Layout>
        <div className='flex w-80 justify-center relative mb-4 flex-col items-center'>
          <h1 className='font-medium text-xl'>Most Recent Products</h1>
          <Search />
        </div>

        <section className="grid sm:gap-4 gap-4 w-full max-w-screen-lg
          grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {
          context.items.map(item => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </section>
      <ProductDetail />
      </Layout>
  
    )
  }
  
  export default Home