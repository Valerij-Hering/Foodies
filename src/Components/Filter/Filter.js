import { useDispatch, useSelector } from 'react-redux'
import { getSelectedCategory, filterCategory } from '../../redux/dishesSlice';

const Filter = ({category}) => {

    const dispatch = useDispatch();
    const slectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
            <p  onClick={() => {dispatch(filterCategory(category))}} className={slectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>
        </div>
    )
}

export default Filter;