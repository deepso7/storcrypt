import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 flex items-center justify-around'>
        <span className='text-lg font-semibold'>Made with 💙 by Ramit, Deepso and Vatsal</span>
        <div className='flex gap-5 justify-evenly'>
            <Link href='https://github.com/deepso7/storcrypt'><a target='_blank'>Github</a></Link>
            <Link href='./team'><a>Team</a></Link>
        </div>
    </div>
  )
}

export default Footer