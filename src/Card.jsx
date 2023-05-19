import React from 'react'
import { useState } from 'react'
import Summary from './Summary'

function Card() {
  const [score, setScore] = useState(0)
  return (
    <div className=''>
      <div>
        <h2>Your Result</h2>
        <div>
          <h3>{score}</h3>
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <Summary setScore={setScore}></Summary>
    </div>
  )
}

export default Card
