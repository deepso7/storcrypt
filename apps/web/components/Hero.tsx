import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-8 py-12 rounded-xl bg-gradient-to-r from-blue-400 to-emerald-400 '>

            <div className='flex flex-col items-center gap-2'>
                <span className='text-5xl  font-extrabold'>Welcome to StorCrypt!</span>
                <span className='text-xl font-medium'>Secure your file before uplaoding to IPFS</span>
            </div>

            <div className='p-5 border-4 border-dashed rounded-2xl font-bold border-gray-600 bg-gray-300'>
                + &nbsp; Upload a file
            </div>

        </div>
    )
}

export default Hero