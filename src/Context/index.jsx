import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api"

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
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

    // Shoping Cart - Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState([]);

    // Get-Search products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log('searchByTitle: ', searchByTitle);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await
            fetch (`${apiUrl}`)
            const data = await response.json()
            setItems(data)
          } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
          }
        }
        fetchData()
      }, [])
    

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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
             {children}
        </ShoppingCartContext.Provider>
    )
}