import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ text, calculation }) => {
  return <p>{text}: {calculation} {text === 'Positive' ? '%' : ''}</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const avg = (good - bad) / all || 0
  const percent = (good / all) * 100 || 0

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header text='statistics' />
      <Statistics text='Good' calculation={good} />
      <Statistics text='Neutral' calculation={neutral} />
      <Statistics text='Bad' calculation={bad} />
      <Statistics text='All' calculation={all} />
      <Statistics text='Average' calculation={avg} />
      <Statistics text='Positive' calculation={percent} />
    </div>
  )
}

export default App;
