import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ values }) => {
  return values.all === 0 ? (
    <p>No feedback given</p> 
  ) : (
    <div>
      <StatisticLine text='Good' value={values.good} />
      <StatisticLine text='Neutral' value={values.neutral} />
      <StatisticLine text='Bad' value={values.bad} />
      <StatisticLine text='All' value={values.all} />
      <StatisticLine text='Average' value={values.avg} />
      <StatisticLine text='Positive' value={values.percent} />
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return <p>{text}: {value} {text === 'Positive' ? '%' : ''}</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const avg = (good - bad) / all || 0
  const percent = (good / all) * 100 || 0
  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    avg: avg,
    percent: percent
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header text='statistics' />
      <Statistics values={values} />
    </div>
  )
}

export default App;
