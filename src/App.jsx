import { useState } from 'react'
import './style.scss'
import Header from "../src/components/Header/Header"
import Main from "../src/components/Main/Main"
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import ItemListContainer from "./components/Main/components/ItemListContainer/ItemListContainer/ItemListContainer"
import  ItemDetailContainer from "./components/Main/components/ItemDetailContainer/itemDetailContainer"
import { CartProvider } from './context/cartContext'
import { Cart } from './components/Main/components/cart/cart'


function App() {
  
  return (
    
    <CartProvider>
       <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path='/'element={<Main/>} ></Route>
        <Route path="/juegos" element={<ItemListContainer/>} />
        <Route path="/juegos/:categoriaId" element={<ItemListContainer/>} />
        <Route path="/:id" element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Cart/>} ></Route>
        
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
   
  )
}

export default App
