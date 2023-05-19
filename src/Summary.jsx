import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Summary({ setScore }) {
  const [data, setData] = useState([])
  const getData = () => {
    axios.get('data.json').then(res => {
      setData(res.data)

      const totalScore = Math.round(res.data.map(item => item.score).reduce((a, b) => a + b) / 4)
      setScore(totalScore)
    })
  }
  useEffect(() => {
    getData()
    console.log(data)
  }, [])
  return (
    <div>
      <h2>Summary</h2>
      {data && data.length > 0 && (
        <div>
          <img src={data[0].icons} alt='icons' />
          <p>{data[0].category}</p>
          <p>{data[0].score} / 100</p>
        </div>
      )}
      <button>Continue</button>
    </div>
  )
}

export default Summary
