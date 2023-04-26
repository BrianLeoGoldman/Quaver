import './App.scss'
import { WelcomeBanner } from './components/WelcomeBanner/WelcomeBanner'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { VynilCardContainer } from './components/VynilCardContainer/VynilCardContainer'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <WelcomeBanner title={"Welcome!"} subtitle={"Music, vynils & more!"} introduction={"Search from a wide selection of vynils of all music genres, styles and decades!"}/>
      <VynilCardContainer/>
      <Footer/>
    </div>
  )
}

export default App
