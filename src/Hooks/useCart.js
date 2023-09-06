import { useContext } from "react"
import { CartContext } from "../Context/cartContext"


export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used with in a CartProvider');
    }

    return context
};