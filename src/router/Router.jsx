import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { CartDetail } from '../components/CartDetail/CartDetail'
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen/RegisterScreen'
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Checkout } from "../components/Checkout/Checkout"
import { Profile } from "../components/Profile/Profile"

export const Router = () => {

    const { user } = useContext(AuthContext)

    return(
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <Navbar/>
                        <Routes>
                            {/* Private routes */}
                            <Route path='/' element={ <ItemListContainer/> }/>
                            <Route path='/category/:categoryId' element={ <ItemListContainer/> }/>
                            <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
                            <Route path='/cart' element={ <CartDetail/> }/>
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path='*' element={ <Navigate to={'/'}/> }/>
                        </Routes>
                        <Footer/>
                    </>
                    : <>
                        <Routes>
                            {/* Public routes */}
                            <Route path='/login' element={<LoginScreen/>}/>
                            <Route path='/register' element={<RegisterScreen/>}/>
                            <Route path='*' element={<Navigate to="/login"/>}/>
                        </Routes>
                        <Footer/>
                    </>
            }
        </BrowserRouter>
    )
}