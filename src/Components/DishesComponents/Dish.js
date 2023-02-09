import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity"

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (

            




                <div className="product-card" key={dish.id} >
                    <img src={`${dish.img} + '.png'`} width="350px" height="250px" alt="food"/>
                    <div className="product-info">
                        <div className="box-info">
                            <div className="box-time-cal">
                                <p className="foodTime">{dish.foodTime}</p>
                                <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
                                <button className="btn-add" onClick={() => {dispatch(addItemToCart({dish, quantity}));}}>Add to cart</button>
                            </div>
                            <h3 className="dish-name">{dish.name}</h3>
                        </div>
                            <div className="box-time-cal">
                                <p className="cal">{dish.cal}</p>
                                <h4 className="price">$ {dish.price}</h4>
                            </div>
                    </div>
                </div>
                



    )
}

export default Dish