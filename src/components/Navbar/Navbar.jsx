import './Navbar.scss'
import logo from '../../assets/images/icons/logo.png'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt='LOGO'/>
            <span className="logo-name">QUAVER</span>
            <div className="header__container">
                <nav className="navbar">
                    <a href='#' className="navbar__link">HOME</a>
                    <a href='#' className="navbar__link">CATALOG</a>
                    <a href='#' className="navbar__link">OFFERS</a>
                    <a href='#' className="navbar__link">CART</a>
                    <a href='#' className="navbar__link">USER</a>
                </nav>
            </div>
            <CartWidget />
        </header>
    )
}