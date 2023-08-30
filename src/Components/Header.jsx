import { Filters } from "./Filters"

// eslint-disable-next-line react/prop-types
export function Header ({ changeFilters }) {
    return(
        <header>
            <h1>E-Shop</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}