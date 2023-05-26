const ItemListContainer= ({juego1,juego2,juego3})=>{


    return(
        <section className="cajaJuegos">
            <ul className="listaJuegos">
                <li className="juego"> {juego1} </li>
                <li className="juego"> {juego2} </li>
                <li className="juego"> {juego3} </li>
                
            </ul>
        </section>

    )
}

export default ItemListContainer