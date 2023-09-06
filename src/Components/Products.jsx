/* eslint-disable react/prop-types */
import { useCart } from '../Hooks/useCart';
import './Products.css';
import  { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx';


export function Products ({ products }) {
    const { addTocart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProdductInCart = checkProductInCart(product)

                    return(
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={() => addTocart(product)}>
                                {
                                    isProdductInCart
                                        ? <RemoveFromCartIcon/>
                                        : <AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}
