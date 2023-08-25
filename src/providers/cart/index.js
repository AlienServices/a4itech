"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  let [realPrice, setRealPrice] = useState();
  let [cart, setCart] = useState([]);
  let [cartLook, setCartLook] = useState([]);
  let [cardInfo, setCardInfoGlobal] = useState({});
  let [personInfo, setPersonInfo] = useState({});

  useEffect(() => {
    if (cart.length > 1) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart]);

  useEffect(() => {
    if (realPrice !== undefined) {
      localStorage.setItem("realPrice", JSON.stringify(realPrice))
    }
  }, [realPrice])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) ?? [])
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart, cartLook, setCartLook, setRealPrice, cardInfo, setCardInfoGlobal, personInfo, setPersonInfo }}>
      {children}
    </CartContext.Provider>
  );
};
