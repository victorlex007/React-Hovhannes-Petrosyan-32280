import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const myCartContext = createContext(null);

export default function CartContext({ children }) {
  const localStorage = window.localStorage;
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartItems)),
    [cartItems]
  );

  const addItemToCart = (item, quantity) => {
    //Busca el item en el cart
    const itemFound = cartItems.find((element) => element.id === item.id);
    //Si lo encuentra, agrega el item con la suma de quantity del item encontrado
    if (itemFound) {
      itemFound.quantity += quantity;
      setCartItems(
        cartItems.map((element) =>
          element.id === itemFound.id ? itemFound : element
        )
      );
      //Si no lo encuentra agrega el item con su primer quantity
    } else {
      item.quantity = quantity;
      setCartItems([...cartItems, item]);
    }
  };

  const getCartTotalQuantity = () => {
    let total = 0;
    cartItems.map((element) => (total += element.quantity));
    return total;
  };

  const getCartTotalPrice = () => {
    let total = 0;
    cartItems.map((element) => (total += element.price * element.quantity));
    return total;
  };

  function removeItem(itemId) {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  }
  function clearItems() {
    setCartItems([]);
  }

  return (
    <>
      <myCartContext.Provider
        value={{
          addItemToCart,
          getCartTotalQuantity,
          cartItems,
          getCartTotalPrice,
          removeItem,
          clearItems,
        }}
      >
        {children}
      </myCartContext.Provider>
    </>
  );
}