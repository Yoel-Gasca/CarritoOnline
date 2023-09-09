// Estado inicial de la app
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// Acciones en el carrito
export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

// Actualiza el localStorage 
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
      const { id } = action.payload
      const productInCartIndex = state.findIndex(item => item.id === id)
  
      if (productInCartIndex >= 0) {
        // 👀 una forma sería usando structuredClone
        // const newState = structuredClone(state)
        // newState[productInCartIndex].quantity += 1
  
        // 👶 usando el map
        // const newState = state.map(item => {
        //   if (item.id === id) {
        //     return {
        //       ...item,
        //       quantity: item.quantity + 1
        //     }
        //   }
  
        //   return item
        // })
  
        // ⚡ usando el spread operator y slice
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]
  
        updateLocalStorage(newState)
        return newState
      }
  
      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ]
  
      updateLocalStorage(newState)
      return newState
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
      updateLocalStorage([])
      return []
    }
}

/**
 * Reductor (reducer) del carrito de compras.
 * 
 * Esta función toma el estado actual y una acción y devuelve un nuevo estado basado en la acción.
 * Si la acción no es reconocida, devuelve el estado actual sin cambios.
 * 
 * @param {object} state - El estado actual del carrito de compras.
 * @param {object} action - La acción que se debe realizar en el carrito de compras.
 * @returns {object} El nuevo estado del carrito de compras después de aplicar la acción.
 */
export const cartReducer = (state, action) => {
    // Extrae el tipo de acción de la acción proporcionada.
    const { type: actionType } = action
     // Obtiene la función de actualización del estado correspondiente según el tipo de acción.
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
 
    // Si existe una función de actualización para la acción, aplica la acción al estado actual.
    // De lo contrario, devuelve el estado actual sin cambios.
    return updateState ? updateState(state, action) : state
}