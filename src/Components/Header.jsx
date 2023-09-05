import { Filters } from "./Filters"

// Esto genera un Header para el encabezado
// eslint-disable-next-line react/prop-types
export function Header () {
    return(
        <header>
            <h1>E-Shop</h1>
            <Filters/>
        </header>
    )
}