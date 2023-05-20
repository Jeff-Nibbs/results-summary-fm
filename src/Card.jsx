import { useState } from 'react'
import Summary from './Summary'

function Card() {
  const [score, setScore] = useState(0)
  return (
    <div className='flex'>
      <div className='flex flex-col gap-3 items-center'>
        <h2>Your Result</h2>
        <div className=' border-2 flex flex-col justify-center items-center px-9 py-7 border-red-600 rounded-full'>
          <h3 className='text-4xl'>{score}</h3>
          <p className='text-xs'>of 100</p>
        </div>
        <h2 className='text-xl'>Great</h2>
        <p className='text-xs text-center w-5/12'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <Summary setScore={setScore}></Summary>
    </div>
  )
}

export default Card
