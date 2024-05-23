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

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetial,
            closeProductDetial,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
             {children}
        </ShoppingCartContext.Provider>
    )
}