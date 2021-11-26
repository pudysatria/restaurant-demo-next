import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/dist/client/link'


const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>Restaurant Demo</title>
        </Head>
        <nav className="px-16 py-3 text-lg bg-white shadow-md font-bold">
        <Link href="/">
            <a className="">
              Home
            </a>
            </Link> 
        </nav>
      
      <main className="my-8 grid justify-center">{children}</main>
      <footer className="w-full text-center py-3 bg-gray-100">
        <a>Demo-nextjs 2021 </a>
      </footer>
        </>
    )
}

export default Layout
