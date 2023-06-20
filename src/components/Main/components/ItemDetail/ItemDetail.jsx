import AgregarMasMenos from "../ItemListContainer/ItemListContainer/agregarMasMenos/agregarMasMenos"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, categoria, img, precio})=>{

    return (

        <div className="cartaJuegoSingular">
            <p>
                {nombre}
            </p>

            <img src={img} alt="" className="imgJuego" />
        
            <p>
                Precio: {precio}
            </p>
            
            <AgregarMasMenos/>

            <button className="añadirCarrito">
                <img src="/img/carrito.png" alt="" className="imgAñadirCarrito" />
            </button>
            
            
            
        </div>

    )


}

export default ItemDetail