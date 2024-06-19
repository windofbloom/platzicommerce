import ImageHeader from "../../utils/ImageHeader"

function Header () {
    return (
        <div className=" flex flex-col lg:flex-row items-center justify-between 
        p-4 space-y-4 lg:space-y-0 lg:space-x-8">
         <div className="max-w-md text-center lg:text-left">
             <h1 className="text-6xl font-bold mb-2 font-serif animate_shopi_title animate-pulse">
                Shopi Store,</h1>
             <p className="mb-2 text-3xl font-mono">Crafted to blend fashion with function</p>
            <h2 className="text-xl font-mono">Ecommerce design made with ♥ by <a href="https://github.com/windofbloom" 
            className="hover:underline font-bold">windofbloom</a></h2>
        </div>
         <div className="object-center">
            <ImageHeader />
        </div>
</div>

    )
}

export default Header