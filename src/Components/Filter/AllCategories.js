
import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="cont">
            {['Breakfast', 'Lunch', 'Dinner', 'All'].map((category, index) => <Filter category={category} key={index}/>)}
            
        </div>
    )
}

export default AllCategories