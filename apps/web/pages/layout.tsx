import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout