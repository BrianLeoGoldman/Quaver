export const NavBar = () => {
    return (
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
    )
}