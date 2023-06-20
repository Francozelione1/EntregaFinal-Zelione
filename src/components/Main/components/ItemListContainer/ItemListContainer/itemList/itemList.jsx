import CartaJuego from "../cartasJuegos/cartasJuegos"

const ItemList = ({producto, modo}) =>{

    if(modo==undefined){
        modo="modoInicio"
    }

    return(
        <section className={modo}>
            <div className="cajaJuegos">
                { producto.map((prod) =>(
                    <CartaJuego key={prod.id} product={prod} />
                ))
                }
            </div>
        </section>
       
    )

}

export default ItemList