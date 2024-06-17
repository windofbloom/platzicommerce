import { Link } from "react-router-dom"
import Layout from "../../Componets/Layout"

function SignUp() {
  
    return (
        <Layout>
        <div className="flex flex-wrap bg-gray-900 w-full p-4 justify-center relative mb-4 -m-4">
          <h1 className="font-serif font-light text-xl text-white uppercase tracking-wide text-center">Welcome to Shopi </h1>
        </div>

        <div className="w-96 bg-white p-6 border border-black rounded-lg mt-5 flex flex-wrap flex-col">
          <span className="flex flex-col mb-3">
            <p className="font-light text-sm mb-2">Username:</p>
            <input className="rounded p-3 bg-gray-500/20"
              placeholder="Your username here"></input>
          </span>

          <span className="flex flex-col mb-3">
            <p className="font-light text-sm mb-3">Email:</p>
            <input className="rounded bg-gray-500/20 p-3"
              placeholder="Your email here"></input>
          </span>

          <span className="flex flex-col mb-3">
            <p className="font-light text-sm mb-3">Password:</p>
            <input className="rounded bg-gray-500/20 p-3"
              placeholder="Five characters"></input>
          </span>

          <span className="flex flex-col">
            <p className="font-light text-sm mb-3">Repeat Password:</p>
            <input className="rounded bg-gray-500/20 p-3"
              placeholder="Same five characters"></input>
          </span>

          <Link
            to="/">
            <button className="bg-gray-900 text-white w-full 
            rounded-lg py-3 mt-4 mb-1">
              Create an account
            </button>
          </Link>

          <div className="text-center mt-4 text-xs">
            <p>Already have an account yet? <Link to="/sign-in"><a className="font-light underline 
            underline-offset-4" href="/">Sign In!</a></Link></p>
          </div>
          
        </div>
      </Layout>

    )
  }
  
  export default SignUp