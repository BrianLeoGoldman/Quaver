import './App.css'
import { VynilCardList } from './components/VynilCardList/VynilCardList'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1 className='page-title'>Quaver</h1>
      <h2 className='page-subtitle'>Looking for music? You are in the right place...</h2>
      <VynilCardList />
    </div>
  )
}

export default App
