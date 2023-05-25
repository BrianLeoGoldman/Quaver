import './App.scss'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import { Router } from './router/Router'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
          <div className="App">
            <Router/>
          </div>    
      </CartProvider>
    </AuthProvider>
  )
}

export default App
