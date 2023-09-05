import { useFilters } from '../Hooks/useFilters'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters()
    
    // Crea un Footer para la etapa de Desarrollo
    return(
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            <h4>Desarrollado con React ⚛️</h4>
            <h5>Shopping Cart</h5>
        </footer>
    )
}