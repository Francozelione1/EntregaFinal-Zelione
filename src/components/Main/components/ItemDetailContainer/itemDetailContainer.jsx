import { useEffect, useState } from "react"
import { pedirDatos } from "../../../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const {id} = useParams()

    useEffect(() =>{
        pedirDatos()    
        .then((res)=>{
            setItem(res.find((item)=> item.id === Number(id)))   
            console.log(id);
        } )
        .catch((rej) =>{
            console.log(rej)
        })
    },[id])

    return(
           <section className="contenedorJuego">
                <ItemDetail {...item} />
           </section>
    )
}

export default ItemDetailContainer
