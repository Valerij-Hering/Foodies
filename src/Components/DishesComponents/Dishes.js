import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice';


const Dishes = () => {

    const slectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="container-products">
            <div className="products">
            {dataDishes
            .filter(dish =>{
                if(slectedCategory === 'All') return true;
                return slectedCategory === dish.category;
            })
            .map((dish, index) => <Dish dish={dish} key={index}/>)}
        </div>
        </div>
        
    )
}

export default Dishes