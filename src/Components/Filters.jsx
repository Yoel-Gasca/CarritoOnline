import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../Hooks/useFilters'

// Filtra el precio por rango

export function Filters () {
    const { filters, setFilters } = useFilters()
    //const [minPrice, setMinPrice] = useState(0)
    // Identificador por precio
    const minPriceFilterId = useId() 
    // Identificador por categorias
    const categoryFilterId = useId() 

    //Establece un precio minimo para filtrar productos
    const handleChangeMinPrice = (event) => {
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    // Filtra productos por categoria
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className='filters'>

            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>

        </section>

    )
}