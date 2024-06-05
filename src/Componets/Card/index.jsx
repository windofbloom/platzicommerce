import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

import { IconShoppingBag, IconPlus } from '@tabler/icons-react';

function Card (data) {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetial();
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
    }

const addProductsToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1)
    context.openCheckoutSideMenu();
    context.closeProductDetial();
  };

  const renderButton = (id) => {
    const isInart = 
    context.cartProducts.filter(product => product.id === id).length > 0

    if (isInart) {
        return (
            <div>
                <button className="flex justify-between text-cyan-500 inline-block 
                pl-2 pr-4 py-2 mr-2 bg-gray-900 rounded font-semibold text-white w-full">
                        <IconShoppingBag /> Added to Cart 
                </button>
            </div>
        )
    } else {
        return(
            <div>
                <button className="flex justify-between inline-block pl-2 
                pr-4 py-2 mr-2 border-2 border-gray-900 hover:bg-gray-800 
                rounded font-semibold text-black hover:text-white w-full"
                     onClick={(e)=> {
                        e.stopPropagation();
                        addProductsToCart(data.data)}}>
                        <IconShoppingBag /> Add to Cart 
                </button>
            </div>
        )
    }

  }

    return (
        <article 
            className="p-3 bg-white cursor-pointer w-56 h-60 h-full border-2 
            border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5 lg:h-48 md:h-36 w-full 
            object-cover object-center">
                <div className="absolute bottom-0 left-0 bg-gray-700/60 rounded-lg
                 text-white text-xs m-2 px-3 py-0.5 ">{data.data.category}</div>
                <img className="w-full h-full object-cover rounded-lg " src={data.data.image} alt={data.data.title} />
                <button className="absolute top-0 right-0 flex justify-center items-center
                bg-gray-900 text-white w-6 h-6 rounded-full m-2 p-1"> 
                <IconPlus /></button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light truncate mt-1">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
            {renderButton(data.data.id)}
        </article>
    )
}

export default Card

