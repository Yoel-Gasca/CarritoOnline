import { useCart } from '../Hooks/useCart'
import { useFilters } from '../Hooks/useFilters'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters()
    const { cart } = useCart()
    
    // Crea un Footer para la etapa de Desarrollo
    return(
        <footer className='footer'>
            {
               JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
            {
            /*<h4>Desarrollado con React ⚛️</h4>
            <h5>Shopping Cart</h5>*/
            }
        </footer>
    )
}