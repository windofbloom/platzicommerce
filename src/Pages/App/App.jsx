import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

/* PAGES */
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SignUp from '../SignUp'

/* COMPONETS */
import Navbar from "../../Componets/Navbar";
import CheckoutSideMenu from '../../Componets/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/women-clothing', element: <Home /> },
    { path: '/men-clothing', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

