import { createContext, useState } from "react";
import { GuardarLocal, TraerDeLocal } from "../helpers/guardarLocalStorage";
import { json, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext()

const mensaje= ()=>{
  toast('🦄 Wow so easy!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

export const CartProvider= ({children})=>{

  const [carrito, setCarrito] = useState([])
  let [cantidad, setCantidad] = useState(1)
  let [total, setTotal]= useState(0)

  let estaEnCarrito= false

  useEffect(() =>{
    setCarrito(JSON.parse(localStorage.getItem("carrito"))|| [])
  },[])


  if(carrito.length>0){
    GuardarLocal("carrito", carrito)
  }
 
    const agregarAlCarrito = (item) =>{
        estaEnCarrito= carrito.some((prod)=> prod.id == item.id)
        if(!estaEnCarrito){
          setCarrito([...carrito, {id: item.id, nombre: item.nombre, precio: item.precio, categoria: item.categoria, cantidad: item.cantidad ,stock: item.stock-cantidad<0 ? 0 :item.stock-cantidad ,img: item.img}])
          toast("Se agregaron ("+item.cantidad+")", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        else{
          setCarrito(carrito.map(
            (prod)=> prod.id == item.id ? prod={id: prod.id, nombre: prod.nombre, precio: prod.precio, 
            categoria: prod.categoria, cantidad: prod.cantidad+cantidad >=10 ? 10 :prod.cantidad+cantidad , stock: prod.stock-cantidad <0 ? 0: prod.stock-cantidad ,img: prod.img}  : prod ))
          console.log(item);
          toast("Se agregaron ("+item.cantidad+")", {  
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          
         
        }
      
        
    }
    
    const eliminarProducto = (producto)=>{
        setCarrito(carrito.filter((prod)=> prod.id !== producto.id))
        GuardarLocal("carrito", carrito)
    }

    const vaciarCarrito= ()=>{
        setCarrito([])
        localStorage.removeItem("carrito")
    }
   
    

    return(  
        <CartContext.Provider value={{carrito, setCarrito ,agregarAlCarrito, eliminarProducto, vaciarCarrito, cantidad, setCantidad, total, setTotal}}>
            {children}
        </CartContext.Provider>
     )
}


/*   if(carrito.some((prod)=> prod.id==item.id)){
            //setCantidadEnviada(0)// cuando quiero agregar un juego existente, luego de agregar un juego que no existia, se agrega el juego existente como nuevo y el total= total del juego anterior + lo que agrego nuevo.
            if(estadoNexo.id != item.id){
                setCantidadEnviada(0)
            }
            else{
                setCantidadEnviada(cantidadEnviada+=cantidad)
                console.log("soy el de item detail cuando el id es igual");
            }
          
        }
        else{
            setCantidadEnviada(0)
            setCantidadEnviada(cantidad)
            console.log("soy el de item detail");
        } */


        /* const agregarAlCarrito = (item) => {
  const estaEnCarrito = carrito.some((prod) => prod.id === item.id);

  if (!estaEnCarrito) {
    setCarrito([item]);
  } else {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito
        .filter((prod) => prod.id !== item.id)
        .concat({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          categoria: item.categoria,
          cantidad: cantidadEnviada,
          img: item.img,
        });

      return nuevoCarrito;
    });

    setCantidadEnviada(0);
  }
}; */



/*  
 */

/*  
//carrito.forEach((prod)=> console.log(prod.cantidad+" de cantidad de "+prod.nombre))
            //setCarrito(carrito.filter((prod)=> prod.id != item.id || prod.cantidad>=item.cantidad))
            /*setCarrito([...carrito, {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                categoria: item.categoria,
                cantidad: cantidadEnviada,
                img: item.img }])*/