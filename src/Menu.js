import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Footer from './Footer';
import  { Toaster } from 'react-hot-toast';
import ScrollButton from './ScrollButton';

const Menu =() => {
    return(
        <div>
            <AllCategories/>
            <Dishes/>
            <Footer/>
            <Toaster 
                toastOptions={{
                success: {
                style: {
                // background: 'white',
                // padding: '20px',
                }
            },
        }}
        />
            <ScrollButton />
        </div>
    )
}
export default Menu