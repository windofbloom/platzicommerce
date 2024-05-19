import { useState, useEffect } from "react"
import Layout from "../../Componets/Layout"
import Card from "../../Componets/Card"

import { apiUrl } from "../../api"

function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await
        fetch (`${apiUrl}`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])
  
    return (
      <Layout>
        Home
        <section className="grid sm:gap-4 gap-4 w-full max-w-screen-lg
          grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          items.map(item => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </section>
      </Layout>
  
    )
  }
  
  export default Home