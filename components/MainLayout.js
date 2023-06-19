import Head from 'next/head'
import Link from 'next/link'
import MainNav from './MainNav'

export default function MainLayout({ title, children }) {
  return (
    <>
        <Head>
            <title>{title ? title: "Next Ecommerce"}</title>
            <meta name="description" content="E commerce" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <header>
            {/* <nav className="flex">
                <Link href="/" className='text-lg font-bold'>
                    NextCommerce
                </Link>
                <div className="">
                    <Link href="/basket">Basket</Link>
                    <Link href="/allFoods">All Foods</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
            </nav> */}
            <MainNav />
            </header>
            <main>
            {children}
            </main>
            <footer>
            footer
            </footer>
        </div>
    </>
    
  )
}