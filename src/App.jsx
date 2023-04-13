import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardList } from './components/CardList'
import { NavBar } from './components/NavBar'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Quaver</h1>
      <p>Looking for music? You are in the right place...</p>
      <p>Chill dude, chill...</p>
      <CardList />
    </div>
  )
}

export default App
