import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const Navbar = ({}) =>{

    return(
        <nav>
                <ul className="listaNavbar">
                    <Link className="itemNavbar" to="/">Inicio</Link>
                    <Link className="itemNavbar" to="/juegos/psn">PSN</Link>
                    <Link className="itemNavbar" to="/juegos/xbox">XBOX</Link>
                </ul>
                <CartWidget/>
        </nav>
    )
}

export default Navbar
