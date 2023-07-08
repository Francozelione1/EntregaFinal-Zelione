import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"
import { TraerDeLocal } from "../../../../helpers/guardarLocalStorage"
import { useEffect } from "react"
import { GuardarLocal } from "../../../../helpers/guardarLocalStorage"



export const Cart= () =>{

    const {carrito, vaciarCarrito, eliminarProducto, setCarrito} = useContext(CartContext)
    let{total, setTotal} = useContext(CartContext)
    useEffect(() =>{
        setCarrito(JSON.parse(localStorage.getItem("carrito"))|| [])
      },[])
    console.log("soy la carta misma");
    
    
       
        
     
    
    setTotal(carrito.reduce((totalFinal, producto)=>totalFinal+(producto.precio*producto.cantidad),0))
  

    return(
        <div>
            {
                carrito.map((producto) =>(
                    <div key={producto.id}>
                        <h3> {producto.nombre} </h3>
                        <img src={producto.img}  alt={producto.nombre} />
                        <p>Precio: {producto.precio} </p>
                        <p>cantidad: {producto.cantidad} </p>
                        <button onClick={()=>eliminarProducto(producto)}>
                            Eliminar producto
                        </button>
                    </div>
                    
                ))
                    
            }
            <p>Total: {total} </p>
            <button onClick={vaciarCarrito}>
                Vaciar carrito
            </button>
        </div>
    )

}