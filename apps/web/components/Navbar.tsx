import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-around items-center py-8'>
        <span className='text-3xl font-bold flex gap-2'>🔒<b>StorCrypt</b></span>
        <div className='flex gap-5 text-xl justify-evenly'>
            <Link href='./about'><a>Github</a></Link>
            <Link href='./about'><a>About</a></Link>
            <Link href='./about'><a>Team</a></Link>
        </div>
    </div>
    </>
    )
}

export default Navbar