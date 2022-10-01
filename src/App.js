import './App.css';
import { useState } from 'react';
import { Cartwidget } from './Components/CartWidget/Cartwidget';
import  Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from "./Components/CartContainer/CartContainer";
import CheckOutContainer from "./Components/CheckOutContainer/CheckOutContainer";


function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <ItemListContainer />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckOutContainer />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
