import { products as initialProducts } from './Mocks/products.json'
import { Products } from './Components/Products'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './Hooks/useFilters'

/**
 * Componente principal de la aplicación.
* 
* Este componente es responsable de renderizar la aplicación principal.
* 
* @returns {JSX.Element} El componente React que representa la aplicación.
*/
function App() {
  // Utiliza el hook useFilters para obtener el estado de los filtros y la función para filtrar productos.
  const { filterProducts } = useFilters()

  // Filtra los productos basados en los filtros seleccionados.
  const filteredProducts = filterProducts(initialProducts)

  return(
    <>
      <Header/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </>
    
  )
}

export default App
