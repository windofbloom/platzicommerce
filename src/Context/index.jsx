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
    const [filtereditems, setFilteredItems] = useState([]);

    // Get-Search products by title
    const [searchByTitle, setSearchByTitle] = useState('');

      // Get-Search products by categoory
    const [searchByCategory, setSearchByCategory] = useState('');
    
    //Filter products for Search input fuction
    const filtereditemsByTitle = (items, searchByTitle) => {
      return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filtereditemsByCategory = (items, searchByCategory) => {
    console.log('items:', items);
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filtereditemsByTitle(items, searchByTitle)
      }

      if (searchType === 'BY_CATEGORY') {
        return filtereditemsByCategory(items, searchByCategory)
      }

      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filtereditemsByCategory(items, searchByCategory).filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      if (!searchType) {
        return items
      }
    }
  

    useEffect (() => {
      if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
      if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
      if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
      if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])
  
    //API Fuction
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
            setSearchByTitle,
            filtereditems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
             {children}
        </ShoppingCartContext.Provider>
    )
}