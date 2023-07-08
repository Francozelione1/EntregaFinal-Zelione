import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../../../context/cartContext"

const CartWidget = () =>{

    let {productosTotales, carrito} = useContext(CartContext)

    return(
        <section className="carrito">
            <Link className="" to="/carrito">
                <button className="botonCarrito">
                    <img src="/img/carrito.png" alt="" className="imagenCarrito"/>
                </button>
            </Link>
            <div className="itemsCarrito">
                <p className="numeroCarrito">{carrito.length}</p>
            </div>
        </section>

    )

}

export default CartWidget