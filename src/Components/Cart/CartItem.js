import { useDispatch } from "react-redux"
import dataDishes from "../../data/dataDishes"
import { removeItemFromCart } from "../../redux/cartSlice"


const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
    return (
        <div className="cartItem-container">
            <img className="cartItem-img" src={`${dishes.img}`+".png"} width="50px" hight="20px" alt="dish"/>

                <div className="box1-cartItem">
                    
                    <p className="cartItem-name">{dishes.name}</p>
                    <div className="box2-cartItem">
                    <p className="cartItem-quantity-price">{cartItem.quantity} portion(s)</p>
                    <p className="cartItem-quantity-price cartItem-price">Price: ${(dishes.price * cartItem.quantity).toFixed(2)}</p>
                </div>

                
            </div>
            <div className="trash" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <ion-icon name="trash-outline"></ion-icon>
                
            </div>
            
            
        </div>
    )
}

export default CartItem