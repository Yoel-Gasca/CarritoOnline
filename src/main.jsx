import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './Context/filters.jsx'

/**
 * Punto de entrada de la aplicación React.
 * 
 * Utiliza ReactDOM.createRoot para renderizar la aplicación en el elemento con el ID "root".
 * La aplicación está envuelta en el contexto proporcionado por FiltersProvider.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
