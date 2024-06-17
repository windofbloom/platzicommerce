import { IconGhostOff } from '@tabler/icons-react';

import Layout from "../../Componets/Layout"

function NotFound() {
  
    return (
      <Layout>
        <div className="flex items-center justify-center flex-col flex-wrap 
        bg-gray-900 w-96 rounded-lg p-8 gap-3 text-white">
          <h1 className="font-serif font-light text-xl 
          tracking-wide text-center">What are you looking for? </h1>
          <IconGhostOff />
          <div className="text-center">
            <a className="font-light text-xs underline underline-offset-4" href="/">Come back Home</a>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default NotFound