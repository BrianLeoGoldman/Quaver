import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Logo } from '../Logo/Logo'

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <header className="header">
            <Logo/>
            <span className="logo-name">QUAVER</span>
            <div className="header__container">
                <nav className="navbar">
                    <Link to='/' className="navbar__link">CATALOG</Link>
                    <Link to='/category/Rock' className="navbar__link">ROCK</Link>
                    <Link to='/category/Jazz' className="navbar__link">JAZZ</Link>
                    <Link to='/category/Pop' className="navbar__link">POP</Link>
                    <Link to='/category/Techno' className="navbar__link">TECHNO</Link>
                </nav>
            </div>
            <div className='user-info'>
                <div className='user-buttons'>
                    <CartWidget />
                    <button className='button' onClick={logout}>Logout</button>
                </div>
                <p className='user-email'>{user.email}</p>
            </div>
        </header>
    )
}