import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

function NavBar() {
    return(
        <div className='container'>
            
            <h2>DeRemeras</h2>

            <nav className='navBar'>
                <ul>
                    <li>Hombres</li>
                    <li>Mujeres</li>
                    <li>Niños</li>
                </ul>
            </nav>

            <CartWidget />
        </div>
    )
}

export default NavBar;