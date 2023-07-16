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
                <img src="/img/signo +.jpg" alt="+" className="imgCantidad" onClick={sumar}/>
            </button>

            <p className="contador">
                {cantidad}
            </p>

            <button className="sumaCantidad">
                <img src="/img/signo-.webp" alt="-" className="imgCantidad" onClick={restar} />
            </button>

        </div>

    )
}

export default AgregarMasMenos