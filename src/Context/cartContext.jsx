import { createContext, useState } from "react";

// Crea el contexto
export const CartContext = createContext();

// Crea el provider
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    // eslint-disable-next-line no-unused-vars
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

    // Limpia el carrito
    const clearCart = () => {
        setCart([])
    };

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
