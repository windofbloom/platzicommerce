import { Link } from "react-router-dom"
import Layout from "../../Componets/Layout"

import { IconBulbOff } from '@tabler/icons-react';

function SignUp() {
  
    return (
      <Layout>
        <div className="flex items-center justify-center flex-col flex-wrap 
        bg-gray-900 w-96 rounded-lg p-8 gap-3 text-white">
          <h1 className="font-serif font-light text-xl  uppercase 
          tracking-wide text-center">Goodbye! </h1>
          <IconBulbOff />
          <div className="text-center">
            <a className="font-light text-xs underline underline-offset-4" href="/">Come back Home</a>
          </div>
        </div>
      </Layout>

    )
  }
  
  export default SignUp