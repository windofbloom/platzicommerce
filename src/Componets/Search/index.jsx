import { useContext } from "react"
import { ShoppingCartContext } from '../../Context';

function Search () {
    const context = useContext(ShoppingCartContext);

    return(
            <div className="mb-4 mt-4">
                <input 
                    type="text" 
                    placeholder="Search product"
                    className="border border-black p-4 w-80 rounded-lg"
                    onChange={(event) => context.setSearchByTitle(event.target.value)}
                />
            </div>
    )
}

export default Search