
import { useContext } from "react"
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';

/*COMPONENTS*/ 
import Card from "../../Componets/Card"
import ProductDetail from "../../Componets/ProductDetail";
import Search from "../../Componets/Search";
import Header from "../../Componets/Header";
import Footer from "../../Componets/Footer";

import { IconGhostOff } from '@tabler/icons-react';


function Home() {

  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    const itemsToRender = 
      context.searchByTitle?.length > 0
        ? context.filtereditems
        : context.items

      if (itemsToRender?.length > 0) {
        return itemsToRender.map(item => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <p className="font-mono text-center flex justify-between align-center">
          No Results Found <IconGhostOff /></p>
      }
  }
  
    return (
      <Layout>
        <Header />
        <div className='flex justify-center relative mb-4 flex-col items-center p-4 bg-black w-full '>
          <h2 className='font-serif font-light text-xl text-white uppercase tracking-wide text-center'>
            Most Recent Products</h2>
        </div>
        <div className="text-center">
        <h3 className="text-lg font-bold font-mono">Look for what you want:</h3>
        <Search />
        </div>

        <section className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full 
        max-w-screen-lg grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">
          {renderView()}
      </section>
      <ProductDetail />
      <Footer />
      </Layout>
  
    )
  }
  
  export default Home
