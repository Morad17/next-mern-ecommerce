import MainLayout from '../components/MainLayout'
import '../styles/globals.css'
import '/public/assets/styles/FoodCard.css'
// import '/public/assets/styles/MainNav.css'

function MyApp({ Component, pageProps }) {
  return(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
  
  
}

export default MyApp
