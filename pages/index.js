import { useEffect, useState } from "react"
import MainLayout from "../components/MainLayout"


export default function Home() {

  const [productsInfo, setProductsInfo ] = useState([])
  const [loading, isLoading ] = useState(true)

  useEffect(()=> { 
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json))
      .catch((err) => {
        console.log(err);
      })
    
  }, [])

  const productNames = productsInfo.map(p => p.name)
  console.log(productNames);

  return <MainLayout title="Next-Commerce">{productsInfo.map(p => p.name)}</MainLayout>
}