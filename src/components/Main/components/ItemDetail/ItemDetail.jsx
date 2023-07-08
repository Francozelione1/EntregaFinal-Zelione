import { useContext, useState } from "react"
import AgregarMasMenos from "../ItemListContainer/ItemListContainer/agregarMasMenos/agregarMasMenos"
import { Link } from "react-router-dom"
import { CartContext } from "../../../../context/cartContext"


const ItemDetail = ({id, nombre, categoria, img, precio, stock})=>{

    const {agregarAlCarrito, setCantidad, carrito} = useContext(CartContext)

    let {cantidad, cantidadEnviada, setCantidadEnviada, estadoNexo, setEstadoNexo} = useContext(CartContext)

    
    const handleAgregarCarrito= ()=>{

        const item= {
            id,
            nombre,
            precio,
            categoria,
            cantidad,
            stock,
            img
        }
        
        
        agregarAlCarrito(item)
        
    }
    
    return (

        <div className="cartaJuegoSingular">
            <p>
                {nombre}
            </p>

            <img src={img} alt="" className="imgJuego" />
        
            <p>
                Precio: {precio}
            </p>
            
            <AgregarMasMenos cantidad={cantidad} setCantidad={setCantidad} />

            <button onClick={handleAgregarCarrito} className="añadirCarrito">
                <img  src="/img/carrito.png" alt="" className="imgAñadirCarrito" />
            </button>
            
         
            
            
        </div>

    )


}

export default ItemDetail