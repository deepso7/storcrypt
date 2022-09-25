import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Head>
                <link rel="shortcut icon" href="/lockicon.svg" />
                <title>
                    { `${ router.pathname === '/' ? 'Home': router.pathname.slice(1,router.pathname.length).toUpperCase()} - StorCrypt` }
                </title>
            </Head>
            <div><Toaster position='top-right' /></div>
            <Navbar />
            <div className='flex-1'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;