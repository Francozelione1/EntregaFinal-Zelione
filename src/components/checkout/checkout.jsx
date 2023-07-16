import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { baseDeDatos } from "../../firebase/config"
import { CartContext } from "../../context/cartContext"


export const Checkout = ()=>{

    const {total, vaciarCarrito, carrito} = useContext(CartContext)
    
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (values.nombre.length === 0) {
            alert("El nombre es obligatorio")
            return
        }
        if (values.direccion.length === 0) {
            alert("La direccion es obligatoria")
            return
        }
        if (values.email.length === 0) {
            alert("El email es obligatorio")
            return
        }

        const orden = {
            cliente: values,
            items: carrito,
            total: total,
            fecha: new Date()
        }
        
        const ordenes = collection(baseDeDatos, "ordenes")

        addDoc(ordenes, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })  
            .catch(err => console.log(err))
    }

    if (orderId) {
        return (
            <div className="compraExitosa">
                <h2 className="tituloCompra">Tu compra se realizo exitosamente</h2>
                <hr className="separacionCompra"/>
                <p className="numeroCompra">Tu número de compra es:  {orderId}</p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if (carrito.length === 0) {
        return <Navigate to="/"/>
    }

    return(
        <div className="ordenCompra">
            <h3 className="tituloCheckout">Checkout</h3>
            <hr/>
            
            <form onSubmit={handleSubmit} className="formulario">
                <input 
                    value={values.nombre}
                    type="text"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    className="label"
                    name="nombre"
                />
                <input 
                    value={values.direccion}
                    type="text"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    className="label"
                    name="direccion"
                />
                <input 
                    value={values.email}
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    className="label"
                    name="email"
                />
                <button className="enviarForm" type="submit">Enviar</button>
            </form>
        </div>
    )

}