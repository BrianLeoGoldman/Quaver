import './App.scss'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { VynilCardList } from './components/VynilCardList/VynilCardList'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer title={"Welcome!"} subtitle={"Music, vynils & more!"} introduction={"Search from a wide selection of vynils of all music genres, styles and decades!"}/>
      <VynilCardList/>
      <Footer/>
    </div>
  )
}

export default App
