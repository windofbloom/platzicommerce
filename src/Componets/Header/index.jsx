/*COMPONENTS*/ 
import Search from "../Search";

function Header () {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg mx-auto p-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <h1 className="text-3xl font-bold mb-2">
          Shopi Store,
          <br />
          Crafted to blend fashion with function
        </h1>
        <h2 className="text-xl font-medium mb-2">
          Ecommerce design made with ♡ by <a href="" className="text-blue-500 underline">windofbloom</a>
        </h2>
        <h3 className="text-lg font-medium mb-4">Look for what you want:</h3>
        <Search />
      </div>
      <figure className="w-full md:w-1/2">
        <img src="dinosaur.jpg" alt="Dinosaur" className="w-full h-auto rounded-lg" />
      </figure>
    </div>
    )
}

export default Header