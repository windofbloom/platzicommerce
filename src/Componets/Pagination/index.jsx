import { useContext } from "react"
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';

function Pagination () {
    return (
        <Layout>
            <nav>
                <a>Previous</a>
                <a>Next page</a>
            </nav>
        </Layout>
    )
}

export default Pagination