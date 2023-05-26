import Navbar from "../Header/components/Navbar/Navbar"

const Header = () =>{

    return(
        <header>
            <div className="header_container">
                <section className="header_nav">
                    <Navbar seccion1="Inicio" seccion2="¿Quienes somos?" seccion3="Juegos" seccion4="Contacto" />
                </section>
            </div>
        </header>
    )
}

export default Header