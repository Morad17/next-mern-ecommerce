import { useEffect, useState } from "react"
import MainLayout from "../components/MainLayout"
import layout from "../components/layout"

export default function Home() {

  const [productsInfo, setProductsInfo ] = useState('')
  const [loading, isLoading ] = useState(true)

  useEffect(()=> {
    if (loading === true){
      
      fetch('/api/products')
      .then(res =>  res.json())
      .then(json => setProductsInfo(json))
      isLoading(false)
    }
    
  }, [])

  // const productNames = productsInfo.map(p => p.name)
  // console.log(productNames);

  return <MainLayout title="Next-Commerce">Home</MainLayout>
}