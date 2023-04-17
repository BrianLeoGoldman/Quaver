import './Navbar.scss'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img className="logo" src={logo} alt='LOGO'/>
                <nav className="navbar">
                    <a href='#' className="navbar__link">Enlace 1</a>
                    <a href='#' className="navbar__link">Enlace 2</a>
                    <a href='#' className="navbar__link">Enlace 3</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
    /* return (
        <nav className="nav">
            <a href="https://vitejs.dev" target="_blank">
                <img src="../public/images/logo.png" className="logo" alt="Quaver logo" />
            </a>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">SHOP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">CART</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">USER</a>
                </li>
            </ul>
        </nav>  
    ) */
}