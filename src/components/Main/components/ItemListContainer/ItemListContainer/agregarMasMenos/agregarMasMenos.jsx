import { useContext, useState } from "react"
import { CartContext } from "../../../../../../context/cartContext"

const AgregarMasMenos = ({cantidad, setCantidad, stock})=>{
    
    const sumar = ()=>{
        stock > cantidad ? setCantidad(cantidad+1): setCantidad(cantidad)
    }

    const restar = ()=>{
        cantidad <= 1 ? setCantidad(cantidad) : setCantidad(cantidad - 1)
    }
    

    return(

        <div className="botonCantidad">

            <button className="sumaCantidad">
                <p className="sumar" onClick={restar}>-</p>
            </button>

            <p className="contador">
                {cantidad}
            </p>

            <button className="sumaCantidad">
                <p className="sumar" onClick={sumar}>+</p>
               
            </button>

        </div>

    )
}

export default AgregarMasMenos