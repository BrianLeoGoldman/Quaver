import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const vynils = [
    {name: 'Band 1', price: 3000, description: 'A description', picture: "images/vynil-yellow.jpg"},
    {name: 'Band 2', price: 4000, description: 'A description', picture: "images/vynil-red.jpg"},
    {name: 'Band 3', price: 2500, description: 'A description', picture: "images/vynil-yellow.jpg"},
    {name: 'Band 4', price: 3600, description: 'A description', picture: "images/vynil-red.jpg"},
    {name: 'Band 5', price: 4100, description: 'A description', picture: "images/vynil-yellow.jpg"}
  ]
  const results = []
  vynils.map(({name, price, description, picture}) => {
    results.push(Card(name, price, description, picture))
  })

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Quaver</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have clicked {count} times
        </button>
        <p>
          Looking for music? You are in the right place...
        </p>
      </div>
      <p className="read-the-docs">
        Chill dude, chill...
      </p>
      {results}
    </div>
  )
}

export default App
