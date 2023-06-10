import React from 'react'
import Head from 'next/head'

export default function Layout({ name, title, children }) {
  return (
    <>
        <Head>
            <title>{title ? title: "Next Ecommerce"}</title>
            <meta name="description" content="E commerce" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <header>
            header
            </header>
            <main>
            {children}
            {name}
            </main>
            <footer>
            footer
            </footer>
        </div>
    </>
    
  )
}