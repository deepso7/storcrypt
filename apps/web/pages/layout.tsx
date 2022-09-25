import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div><Toaster position='top-right'/></div>
            <Navbar />
            <div className='flex-1'>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;