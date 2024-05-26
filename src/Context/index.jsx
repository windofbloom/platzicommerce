import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    // Shiping Cart increment quantity
    const [count, setCount] = useState(0);

    //Product detail - open/close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const openProductDetial = () => setisProductDetailOpen(true);
    const closeProductDetial = () => setisProductDetailOpen(false);

    // Product detail Show product
    const [productToShow, setProductToShow] = useState({});

    //Shoping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Checkout Side Menu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => {
        console.log('Opening Checkout Side Menu');
        setIsCheckoutSideMenu(true);
    } 
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetial,
            closeProductDetial,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
             {children}
        </ShoppingCartContext.Provider>
    )
}