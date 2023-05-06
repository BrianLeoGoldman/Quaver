import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={ <WelcomePage /> }/>
          <Route path='/catalog' element={ <ItemListContainer/> }/>
          <Route path='*' element={ <Navigate to={'/'}/> }/>
        </Routes>
        <Footer/>
      </div>    
    </BrowserRouter>
  )
}

export default App
