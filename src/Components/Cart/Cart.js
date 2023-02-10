
import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"
import CartItem from "./CartItem"


const Cart = () => {

    const cartItem = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)


    
    
    return (
        <div className="container-cart">
            <p className="totalPrice">{totalPrice === 0 ? 'Cart is empty' : `Total: $${totalPrice.toFixed(2)}`}</p>
            {cartItem.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
            
        </div>
    )
}

export default Cart
