import { useContext, useState } from "react"
import Layout from "../../Componets/Layout"
import { ShoppingCartContext } from '../../Context';

function Pagination ({productsPerPage, totalProducts, currentPage, setCurrentPage}) {
    const context = useContext(ShoppingCartContext);

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
            <div className="mt-6 flex items-center justify-center flex-wrap font-mono w-full bg-white rounded-lg p-2 mb-8">
                <button 
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className={`${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed opacity-50' : ''} h-8 text-xs border-2 border-black px-6 rounded-lg 
                hover:bg-black hover:text-white mr-2`}>
                    <p className="text-x1 font-medium">Prev</p>
                </button>

                <ul className="flex justify-between">
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}
                            className= {`${noPage === currentPage ? 'bg-black text-white' : ''}
                                h-8 text-xs border-2 border-black px-6 rounded-lg 
                             hover:bg-black hover:text-white mr-2 cursor-pointer flex items-center justify-center`}>
                                <a onClick={() => onSpecificPage(noPage)}
                                className="font-medium">{noPage}</a>
                            </li>
                        ))
                    }
                    
                </ul>

                <button 
                onClick={onNextPage}
                disabled={currentPage >= pageNumbers.length}
                className={`${currentPage >= pageNumbers.length ? 'bg-gray-300 cursor-not-allowed opacity-50' : ''} h-8 text-xs border-2 border-black px-6 rounded-lg 
                hover:bg-black hover:text-white mr-2`}>
                    <p className="text-x1 font-medium">Next</p>
                </button>
            </div>
    )
}

export default Pagination