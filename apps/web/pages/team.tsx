import React from 'react'
import TeamCard from '../components/TeamCard'

const about = () => {
  return (
    <div className='flex justify-center items-center gap-5'>

        <TeamCard imageUrl='/deepso.png' name='Deepanshu' twitter='https://twitter.com/Deepso7' github='https://github.com/deepso7' role='Fullstack Developer' />
        <TeamCard imageUrl='/ramit.png' name='Ramit' twitter='https://twitter.com/phi_ramit' github='https://github.com/Ramitphi' role='Fullstack Developer' />
        <TeamCard imageUrl='/vatsal.jpeg' name='Vatsal' twitter='https://twitter.com/thevatsal_eth' github='https://github.com/thevatsal-eth' role='Frontend Developer' />

    </div>
  )
}

export default about