import MainLayout from '../components/MainLayout'
import { FoodsContextProvider } from '../components/FoodContext'
import '../styles/globals.css'
import '/public/assets/styles/FoodCard.css'
// import '/public/assets/styles/MainNav.css'

function MyApp({ Component, pageProps }) {
  return(
    <FoodsContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </FoodsContextProvider>
    
  )
  
  
}

export default MyApp
