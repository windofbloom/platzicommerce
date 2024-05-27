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
                <button className="flex justify-between text-cyan-500">
                        <IconShoppingBag /> Added to Cart 
                </button>
            </div>
        )
    } else {
        return(
            <div>
                <button className="flex justify-between"
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
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <div className="absolute bottom-0 left-0 bg-white/60 rounded-lg
                 text-black text-xs m-2 px-3 py-0.5 ">{data.data.category}</div>
                <img className="w-full h-full object-cover rounded-lg " src={data.data.image} alt={data.data.title} />
                <button className="absolute top-0 right-0 flex justify-center items-center
                bg-white w-6 h-6 rounded-full m-2 p-1"> 
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

