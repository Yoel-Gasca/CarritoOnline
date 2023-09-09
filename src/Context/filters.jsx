import { createContext, useState } from 'react';

// 1. Crea el contexto
export const FiltersContext = createContext()

// 2. Crea el proveedor del contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}