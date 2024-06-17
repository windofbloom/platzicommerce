import { Link } from "react-router-dom"
import Layout from "../../Componets/Layout"

function SignIn() {
  
    return (
      <Layout>
        <div className="flex flex-wrap bg-gray-900 w-full p-4 justify-center relative mb-4 -m-4">
          <h1 className="font-serif font-light text-xl text-white uppercase tracking-wide text-center">Welcome to Shopi </h1>
        </div>

        <div className="w-96 bg-white p-6 border border-black rounded-lg mt-5 flex flex-wrap flex-col">
          <span className="flex flex-col mb-3">
            <p className="font-light text-sm mb-2">Email:</p>
            <input className="rounded p-3 bg-gray-500/20"
              placeholder="shopi@shopi.com"></input>
          </span>

          <span className="flex flex-col">
            <p className="font-light text-sm mb-3">Password:</p>
            <input className="rounded bg-gray-500/20 p-3"
              placeholder="*****"></input>
          </span>
          
          <Link
            to="/">
            <button className="bg-black disabled:bg-black/40 text-white w-full 
            rounded-lg py-3 mt-4 mb-1">
              Log In
            </button>
          </Link>
          <div className="text-center">
            <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password?</a>
          </div>

          <div className="text-center mt-4 text-xs">
            <p>Don't have an account yet? <Link to="/sign-up"><a className="font-light underline 
            underline-offset-4" href="/">Sign up for free!</a></Link></p>
          </div>
          
        </div>
      </Layout>

    )
  }
  
  export default SignIn