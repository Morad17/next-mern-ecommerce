import Head from 'next/head'
import Link from 'next/link'
import MainNav from './MainNav'
import MainFooter from './MainFooter'

export default function MainLayout({ title, children }) {
  return (
    <>
        <Head>
            <title>{title ? title: "Superfood Store"}</title>
            <meta name="description" content="E commerce" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <header>
            <MainNav />
            </header>
            <main>
            {children}
            </main>
            <footer>
            <MainFooter />
            </footer>
        </div>
    </>
    
  )
}