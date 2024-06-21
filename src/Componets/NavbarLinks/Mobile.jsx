import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { NavLink } from "react-router-dom";


function MobileNavLinks () {
    const context = useContext(ShoppingCartContext);
    const activeStyle = {
        textDecoration: 'underline underline-offset-4',
    };

      // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                <li className="font-semibold">{parsedAccount?.email}</li>
                    <li>
                <NavLink to='/my-orders'>
                    My Orders
                </NavLink>
                 </li>
                <li>
                <NavLink to='/my-account'>
                    My Account
                </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sign-in'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => handleSignOut()}>
                    Sign out
                    </NavLink>
                </li>
                </>
            )
        } else {
            return (
              <li>
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) => isActive ? activeStyle : undefined }
                  onClick={() => handleSignOut()}>
                  Sign in
                </NavLink>
              </li>
            )
          }
    }

    return(
        <>
            <ul>
            <li className="font-semibold">
                <NavLink 
                    to={`${isUserSignOut ? '/sign-in' : '/'}`} 
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle: undefined
                    }>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                onClick={() => context.setSearchByCategory()}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/jewelery'
                onClick={() => context.setSearchByCategory('jewelery')}>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink to='/women-clothing'
                onClick={() => context.setSearchByCategory("women's clothing")}>
                    Women Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/men-clothing'
                onClick={() => context.setSearchByCategory("men's clothing")}>
                    Men Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'
                onClick={() => context.setSearchByCategory('electronics')}>
                    Electronics
                </NavLink>
            </li>
        </ul>

        <ul>
            {renderView()}
            {/** <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              onClick={() => handleSignOut()}>
              Sign In
            </NavLink>
            </li>*/} 
        </ul>
        </>
    )
}

export default MobileNavLinks