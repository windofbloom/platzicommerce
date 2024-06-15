import { useContext, useState } from "react"
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';

function Pagination () {
    const context = useContext(ShoppingCartContext);

    const pageNumbers = []

    //for (let i = 1; i)

    return (
        <Layout>
            <div className="flex bg-white rounded-lg p-2 mb-8">
                <button className="h-12 border-2 border-black px-6 rounded-l-lg 
                hover:bg-black hover:text-white mr-2">
                    <p className="text-x1 font-medium">Prev</p>
                </button>

                <ul className="">
                    <li className="h-12 border-2 border-black px-6 rounded-lg 
                     hover:bg-black hover:text-white mr-2 cursor-pointer flex items-center justify-center">
                    <a className=" font-medium">1</a>
                    </li>
                </ul>

                <ul className="">
                    <li className="h-12 border-2 border-black px-6 rounded-lg 
                     hover:bg-black hover:text-white mr-2 cursor-pointer flex items-center justify-center">
                    <a className=" font-medium">10</a>
                    </li>
                </ul>


                <button className="h-12 border-2 border-black px-6 rounded-r-lg 
                hover:bg-black hover:text-white mr-2 ">
                    <p className="text-x1 font-medium">Next</p>
                </button>
            </div>
        </Layout>
    )
}

export default Pagination