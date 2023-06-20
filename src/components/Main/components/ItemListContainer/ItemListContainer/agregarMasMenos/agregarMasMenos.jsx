import { useState } from "react"

const AgregarMasMenos = ()=>{
    
    const [counter, setCounter] = useState(0)

    const sumar = ()=>{
        setCounter(counter + 1) 
    }

    const restar = ()=>{

        counter <= 0 ? setCounter(counter) : setCounter(counter - 1)
    }

    return(

        <div className="botonCantidad">

            <button className="sumaCantidad">
                <img src="/img/signo +.jpg" alt="+" className="imgCantidad" onClick={sumar}/>
            </button>

            <p className="contador">
                {counter}
            </p>

            <button className="sumaCantidad">
                <img src="/img/signo-.webp" alt="-" className="imgCantidad" onClick={restar} />
            </button>

        </div>

    )
}

export default AgregarMasMenos