import './Navbar.scss'
import logo from '../../assets/images/icons/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt='LOGO'/>
            <span className="logo-name">QUAVER</span>
            <div className="header__container">
                <nav className="navbar">
                    {/* <Link to='/' className="navbar__link">HOME</Link> */}
                    <Link to='/' className="navbar__link">CATALOG</Link>
                    <Link to='/category/Rock' className="navbar__link">ROCK</Link>
                    <Link to='/category/Jazz' className="navbar__link">JAZZ</Link>
                    <Link to='/category/Pop' className="navbar__link">POP</Link>
                    <Link to='/category/Techno' className="navbar__link">TECHNO</Link>
                </nav>
            </div>
            <CartWidget />
        </header>
    )
}