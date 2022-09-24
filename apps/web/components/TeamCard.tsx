import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface About {
    imageUrl?: string;
    name: string;
    role: string;
    twitter: string;
    github: string;
}

const TeamCard: React.FC<About> = ({ imageUrl = 'https://dummyimage.com/400x400/cccccc/fff', name, role, twitter, github }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-5 bg-blue-100 rounded-xl'>

        <Image src='https://dummyimage.com/400x400/cccccc/fff' className='rounded-full' height={400} width={400} alt='pfp' />
        <span className='text-3xl  font-bold tracking-wide '>{name}</span>
        <div className='text-xl font-'>{role}</div>
        <div className='flex gap-2'>
            <Link href={twitter}><a className='italic text-lg hover:underline font-medium ' target='_blank'>Twitter</a></Link>
            <Link href={github}><a className='italic text-lg hover:underline font-medium ' target='_blank'>Github</a></Link>
        </div>

    </div>
  )
}

export default TeamCard