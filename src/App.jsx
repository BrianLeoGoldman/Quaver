import './App.scss'
import { CartProvider } from './contexts/CartContext'
import { AuthProvider } from './contexts/AuthContext'
import { Router } from './router/Router'

function App() {

  return (
    <AuthProvider> {/* OPCIONAL: Sincronizar sesion con estado del carrito, con una coleccion */}
      <CartProvider>
          <div className="App">
            <Router/>
          </div>    
      </CartProvider>
    </AuthProvider>
  )
}

export default App
