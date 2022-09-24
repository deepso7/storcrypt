import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 flex items-center justify-around'>
        <span className='text-lg font-semibold'>Made with 💙 by Ramit, Deepso and Vatsal</span>
        <div className='flex gap-5 justify-evenly'>
            <Link href='./about'><a>Github</a></Link>
            <Link href='./about'><a>About</a></Link>
            <Link href='./about'><a>Team</a></Link>
        </div>
    </div>
  )
}

export default Footer