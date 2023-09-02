import { products as initialProducts } from './Mocks/products.json'
import { Products } from './Components/Products'
import { useContext, useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './Context/filters'

function useFilters (){
  // Usando el contexto en los filtros
  const { filters, setFilters } = useContext(FiltersContext)

  // Sistema de filtros
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price > filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  
  return { filterProducts, setFilters }

}
function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters} = useFilters()

  const filteredProducts = filterProducts(products)

  return(
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </>
    
  )
}

export default App
