import { products } from './Mocks/products.json'
import { Products } from './Components/Products'

function App() {
  return(
      <Products products={products} />
    
  )
}

export default App
