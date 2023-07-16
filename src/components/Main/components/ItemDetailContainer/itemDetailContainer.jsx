import { useContext, useEffect, useState } from "react"
import { pedirDatos } from "../../../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {doc, getDoc} from "firebase/firestore"
import { baseDeDatos } from "../../../../firebase/config"

const ItemDetailContainer = () => {

    
    const [item, setItem] = useState (null)
    const {id} = useParams()

    useEffect(() =>{
       
        const itemRef = doc(baseDeDatos, "productos", id)

        getDoc(itemRef)
            .then((doc)=>{

                setItem({...doc.data(), id: doc.id})

            })

    },[id])

    return(
           <section className="contenedorJuego">
                <ItemDetail {...item} />
           </section>
    )
}

export default ItemDetailContainer


/*  pedirDatos()    
        .then((res)=>{
            setItem(res.find((item)=> item.id === Number(id)))   
            console.log(id);
        } )
        .catch((rej) =>{
            console.log(rej)
        })  */