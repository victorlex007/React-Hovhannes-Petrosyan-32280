import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { Cartwidget } from '../Components/CartWidget/Cartwidget'; 
import Home from "../Pages/Home";
import ItemDetail from '../Pages/ItemDetail';
import Productos from '../Pages/Productos';
import CartContainer from '../Pages/CartContainer';


export const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<CartContainer />} />
    <Route path="/itemdetail" element={<ItemDetail />} />
    <Route path="/productos" element={<Productos />} />
    </Routes>
    </BrowserRouter>
  )
}
