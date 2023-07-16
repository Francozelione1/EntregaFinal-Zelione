import { useEffect, useState } from "react"
import ItemList from "../ItemListContainer/itemList/itemList"
import {pedirDatos} from "../../../../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import { baseDeDatos } from "../../../../../firebase/config"

const ItemListContainer= ()=>{

    const [productos, setProductos] = useState ([])
    const {categoriaId} = useParams()
    let modo=categoriaId

    useEffect(() =>{

        const productosRef= collection(baseDeDatos, "productos")
        
        const q = 
            categoriaId ?
            query(productosRef, where("categoria","==",categoriaId))
            :
            productosRef

        getDocs(q)
            .then((resp)=>{
                const items = resp.docs.map((doc)=> ({...doc.data(), id: doc.id}))
                setProductos(items);
                modo="modoInicio"
            })
            .catch(e => console.log(e))

            
        
    },[categoriaId])

    return(
           <ItemList producto={productos} modo={modo} /> 
    )
}

export default ItemListContainer

/*  pedirDatos()    
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
        }) */