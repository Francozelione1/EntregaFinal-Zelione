import CartWidget from "../CartWidget/CartWidget"

const Navbar = ({seccion1,seccion2,seccion3,seccion4}) =>{

    return(
        <nav>
                <ul className="listaNavbar">
                    <a className="itemNavbar" href="#">{seccion1}</a>
                    <a className="itemNavbar" href="#"> {seccion2} </a>
                    <a className="itemNavbar" href="#"> {seccion3} </a>
                    <a className="itemNavbar" href="#"> {seccion4} </a>
                </ul>

                <CartWidget/>
        </nav>

        
    )

}

export default Navbar