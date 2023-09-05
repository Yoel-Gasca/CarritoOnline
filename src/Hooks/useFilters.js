import { useContext } from "react";
import { FiltersContext } from "../Context/filters";

export function useFilters (){
    // Usando el contexto en los filtros
    const { filters, setFilters }= useContext(FiltersContext)

    // Sistema de filtros
    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                product.price > filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }
    return { filters, filterProducts, setFilters};
}