import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const defaultVal = parseInt(localStorage.getItem('userScore'), 10) ?? 0
  const [score, setScore] = useState(defaultVal)

  useEffect(() => {
    localStorage.setItem('userScore', score)
  }, [score])

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
      <button onClick={() => setScore(0)}>RESET</button>
    </div>
  )
}
