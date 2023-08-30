import { products as initialProducts } from './Mocks/products.json'
import { Products } from './Components/Products'
import { useState } from 'react'
import { Header } from './Components/Header'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  const filteredProducts = filterProducts(products)

  return(
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
    
  )
}

export default App
