import { useState } from "react"

const CartWidget = () =>{


    return(
        <section className="carrito">
            <button className="botonCarrito">
                <img src="/img/carrito.png" alt="" className="imagenCarrito"/>
            </button>
            <div className="itemsCarrito">
                <p className="numeroCarrito">0</p>
            </div>
        </section>

    )

}

export default CartWidget