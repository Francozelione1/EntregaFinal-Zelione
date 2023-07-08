import { useState } from "react"

const AgregarMasMenos = ({cantidad, setCantidad, item})=>{
    

    const sumar = ()=>{
        setCantidad(cantidad + 1) 
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