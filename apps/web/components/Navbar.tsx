import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React from 'react'
import WalletButton from './WalletButton'

const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <div className='flex justify-around items-center py-8'>
                <span className='text-3xl font-bold flex gap-2 cursor-pointer' onClick={() => router.push('/')}>🔒<b>StorCrypt</b></span>
                <div className='flex gap-5 items-center text-xl justify-evenly'>
                    <Link href='./team'><a target='_blank'>Github</a></Link>
                    <Link href='./team'><a>Team</a></Link>
                    <WalletButton />

                </div>
            </div>
        </>
    )
}

export default Navbar