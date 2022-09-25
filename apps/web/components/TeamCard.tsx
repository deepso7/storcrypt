import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface About {
    imageUrl: string;
    name: string;
    role: string;
    twitter: string;
    github: string;
}

const TeamCard: React.FC<About> = ({ imageUrl, name, role, twitter, github }) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-2 p-6 bg-slate-800 rounded-xl'>

        <Image src={imageUrl} className='rounded-full' height={400} width={400} alt='pfp' />
        <div className='text-lg font-'>{role}</div>
        <span className='text-3xl  font-extrabold tracking-wide '>{name.toUpperCase()}</span>
        <div className='flex gap-2 mt-2'>
            <Link href={twitter}><a className='italic text-lg hover:underline font-medium bg-blue-500 p-2 rounded-md' target='_blank'>Twitter</a></Link>
            <Link href={github}><a className='italic text-lg hover:underline font-medium bg-gray-700 p-2 rounded-md' target='_blank'>Github</a></Link>
        </div>

    </div>
  )
}

export default TeamCard