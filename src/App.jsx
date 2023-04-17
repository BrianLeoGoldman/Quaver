import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VynilCardList } from './components/VynilCardList/VynilCardList'
import { Navbar } from './components/Navbar/Navbar.jsx'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1>Quaver</h1>
      <p>Looking for music? You are in the right place...</p>
      <p>Chill dude, chill...</p>
      <VynilCardList />
    </div>
  )
}

export default App
