const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button className="btn-change" onClick={removeQuantity}><ion-icon name="remove-outline"></ion-icon></button>
            <span className="quantity">{quantity}</span>
            <button className="btn-change" onClick={addQuantity}><ion-icon name="add-outline"></ion-icon></button>
        </div>
    )
}

export default ChangeQuantity;