import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../Reducers/cart'

// Creación del contexto para el carrito de compras.
export const CartContext = createContext()

/**
 * Hook personalizado para gestionar el estado del carrito de compras.
 * 
 * Utiliza useReducer para manejar el estado y las acciones del carrito.
 * Proporciona funciones para agregar, eliminar y vaciar el carrito.
 * 
 * @returns {object} Un objeto que contiene el estado del carrito y funciones para interactuar con él.
 */
function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

/**
 * Proveedor del contexto del carrito de compras.
 * 
 * Utiliza el contexto de React para proporcionar el estado del carrito y las funciones relacionadas a los componentes hijos.
 * 
 * @param {object} children - Los componentes hijos que deben tener acceso al contexto del carrito.
 * @returns {JSX.Element} El componente React que proporciona el contexto del carrito.
 */
// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

