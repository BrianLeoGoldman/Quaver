import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './contexts/CartContext'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])

  const addToCartContext = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }
  
  return (
    <CartContext.Provider value={{cart, addToCartContext, isInCart}}>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <Navigate to={'/'}/> }/>
        </Routes>
        <Footer/>
      </div>    
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
