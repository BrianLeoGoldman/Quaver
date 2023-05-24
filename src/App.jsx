import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { WelcomePage } from './components/WelcomePage/WelcomePage'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartDetail } from './components/CartDetail/CartDetail'
import { CartContext, CartProvider } from './contexts/CartContext'
import { useState } from 'react'
import { LoginScreen } from './components/LoginScreen/LoginScreen'
import { RegisterScreen } from './components/RegisterScreen/RegisterScreen'

function App() {

  const logged = false

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          {
            logged
              ? <>
                <Navbar/>
                <Routes>
                  <Route path='/' element={ <ItemListContainer/> }/>
                  <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
                  <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
                  <Route path='/cart' element={ <CartDetail/> }/>
                  <Route path='*' element={ <Navigate to={'/'}/> }/>
                </Routes>
                <Footer/>
              </>
              :
                <Routes>
                  <Route path='/login' element={<LoginScreen/>}/>
                  <Route path='/register' element={<RegisterScreen/>}/>
                  <Route path='*' element={<Navigate to="/login"/>}/>
                </Routes>
          }
        </div>    
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
