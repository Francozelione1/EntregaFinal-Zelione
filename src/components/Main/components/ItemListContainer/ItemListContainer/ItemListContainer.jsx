import { useEffect, useState } from "react"
import ItemList from "../ItemListContainer/itemList/itemList"
import {pedirDatos} from "../../../../../helpers/pedirDatos"
import { useParams } from "react-router-dom"

const ItemListContainer= ()=>{

    const [productos, setProductos] = useState ([])
    const {categoriaId} = useParams()
    let modo=categoriaId

    useEffect(() =>{
        pedirDatos()    
        .then((res)=>{
            if(!categoriaId){
                setProductos(res)
                modo="modoInicio"
                console.log(modo)
            }
            else{
                setProductos(res.filter((producto)=>producto.categoria === categoriaId)) 
                console.log(modo)
            }
        } )
        .catch((rej) =>{
            console.log(rej)
        })
    },[categoriaId])

    return(
           <ItemList producto={productos} modo={modo} /> 
    )
}

export default ItemListContainer
