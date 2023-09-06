/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Crea el contexto
export const CartContext = createContext();

// Crea el provider

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    
    const addToCart = product => {
        //Verifica si hay algun producto en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex > 0){
            // 1- structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart);
        }

        // En caso de que el carrito no tenga algun producto
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    // Limpia el carrito
    const clearCart = () => {
        setCart([])
    };

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
