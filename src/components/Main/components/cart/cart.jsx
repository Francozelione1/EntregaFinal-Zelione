import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"
import { TraerDeLocal } from "../../../../helpers/guardarLocalStorage"
import { useEffect } from "react"
import { GuardarLocal } from "../../../../helpers/guardarLocalStorage"
import { Link } from "react-router-dom"



export const Cart = () => {

    const { carrito, vaciarCarrito, eliminarProducto, setCarrito } = useContext(CartContext)
    let { total, setTotal } = useContext(CartContext)
    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
    }, [])
    console.log("soy la carta misma");


    setTotal(carrito.reduce((totalFinal, producto) => totalFinal + (producto.precio * producto.cantidad), 0))


    return (
        <div className="contenedorCarrito">

            <h3 className="tituloCarrito">Tu carrito de compras</h3>
            <hr  className="separacionCarrito"/>

            <div className="contenedorJueguitos">

            {
                carrito.map((producto) => (
                    <div className="cartaJuegoCarrito" key={producto.id}>
                        <p>
                            {producto.nombre}
                        </p>

                        <img src={producto.img} alt={producto.nombre} className="imgJuego" />

                        <p>
                            Precio: {producto.precio}
                        </p>

                        <p>Cantidad: {producto.cantidad} </p>

                        <button className="eliminarProducto" onClick={()=>eliminarProducto(producto)}>
                            Eliminar producto
                        </button>
                        
                    </div>

                    /*<div key={producto.id}>
                        <h3> {producto.nombre} </h3>
                        <img src={producto.img}  alt={producto.nombre} />
                        <p>Precio: {producto.precio} </p>
                        <p>cantidad: {producto.cantidad} </p>
                        <button onClick={()=>eliminarProducto(producto)}>
                            Eliminar producto
                        </button>
                        {
                        console.log(producto)
                        }
                    </div>*/


                ))

            }
            </div>

            <hr  className="separacionCarrito"/>
            <div className="infoPago">
            <p className="total">Total: {total} </p>
            <button className="vaciarCarrito" onClick={vaciarCarrito}>
                Vaciar carrito
            </button>

            <Link className="finalizarCompra" to="/checkout" >Finalizar Compra</Link>
         
            </div>
            
        </div>
    )

}