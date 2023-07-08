import AgregarMasMenos from "../agregarMasMenos/agregarMasMenos"
import { Link } from "react-router-dom"
const CartaJuego = ({product})=>{

    return (

        <div className="cartaJuego">
            <p>
                {product.nombre}
            </p>

            <img src={product.img} alt="" className="imgJuego" />
        
            <p>
                Precio: {product.precio}
            </p>
            
            <Link className="verDetalle" to={`/${product.id}`} >Ver Detalle</Link>
            
            
        </div>

    )


}

export default CartaJuego

