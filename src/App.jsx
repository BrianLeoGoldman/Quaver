import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:id' element={ <ItemListContainer/> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <Navigate to={'/'}/> }/>
        </Routes>
        <Footer/>
      </div>    
    </BrowserRouter>
  )
}

export default App
