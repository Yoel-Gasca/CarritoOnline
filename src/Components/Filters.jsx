import { useState } from 'react'
import './Filters.css'

// Filtra el precio por rango
// eslint-disable-next-line react/prop-types
export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

    //Establece un precio minimo para filtrar productos
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    // Filtra productos por categoria
    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className='filters'>

            <div>
                <label htmlFor='price'>Precio</label>
                <input 
                    type="range"
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>{minPrice}</span>
            </div>

            <div>
                <label htmlFor='category'>Categoria</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>

        </section>

    )
}