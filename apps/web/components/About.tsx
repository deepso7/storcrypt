import Image from 'next/image'
import React from 'react'

interface Tech {
    name: string,
    url: string,
    icon?: JSX.Element
}

const tech: Tech[] = [
    {
        name: "Streamr Network",
        url: "https://www.streamr.network"
    },
    {
        name: "Sign in with Ethereum",
        url: "https://www.login.xyz"
    },
    {
        name: "IPFS",
        url: "https://www.ipfs.io"
    },
    {
        name: "Login with Lens",
        url: "https://lens.xyz/"
    },
    {
        name: "Login with UD",
        url: "https://www.unstoppabledomains.com"
    },
]

// const tech = [ "Streamr Network", "Sign in with Ethereum", "IPFS", "Login with Lens", "Login with UD",  ]

const About = () => {
  return (
    <div className='max-w-full flex justify-center items-center gap-20 px-10'>
        <div className='flex flex-col gap-4'>
            <span className='text-2xl font-bold'>What is StorCrypt?</span>
            <p className='text-lg font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias enim dolorem dolores hic eaque harum fugiat blanditiis odit sit! Maiores facere eum distinctio sunt corporis earum deleniti aliquid reiciendis nihil!</p>
            <div className='flex items-center gap-5 mt-10'>
                <span className='text-xl font-semibold italic'>Technologies we use:</span>
                <div className='flex gap-2'>
                {
                    tech.map((item) => (
                        <span className='p-3 bg--400 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white  rounded-lg text-center font-medium'>
                            <a href={item.url} target='_blank'>
                            {item.name}
                            </a>
                        </span>
                    ))
                }
                </div>
                
            </div>
        </div>
        <div>
      <Image src='/crypt4.png' className="select-none" height={600} width={600} layout='fixed'/>
      </div>
    </div>
  )
}

export default About