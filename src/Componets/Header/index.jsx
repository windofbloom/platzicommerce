import { IconArrowDown } from '@tabler/icons-react';

function Header () {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full 
        max-w-screen-lg mx-auto p-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <h1 className="font-bold mb-2 text-7xl mb-2">Shopi Store,</h1>
        <p className="text-3xl">Crafted to blend fashion with function</p>
        <h2 className="text-xl font-medium mb-2">
          Ecommerce design made with ♡ by <a href="https://github.com/windofbloom" 
          className="underline">windofbloom</a>
        </h2>
        <IconArrowDown />
      </div>
      <figure className="w-full md:w-1/2">
        <img src="dinosaur.jpg" alt="Dinosaur" className="w-full h-auto rounded-lg" />
      </figure>
    </div>
    )
}

export default Header