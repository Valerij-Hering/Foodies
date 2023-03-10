import './App.css';
import Cart from './Components/Cart/Cart';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import { useState } from "react"
import Menu from './Menu';
import Home from './Home';
import Contacts from './Contacts';
import StripeContainer from "./Stripe/StripeContainer";
import { useSelector } from 'react-redux';
import { getTotalArticles } from './redux/cartSlice';
import  { Toaster } from 'react-hot-toast';
import About from './About';
import Account from './Auth/Account';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import user from './user.png';
import shoppingCart from './shopping-cart.png';


function App() {

  const [burger, setBurger] = useState(false);
  const [cartContainer, setCartContainer] = useState(false);
  const [colorNav, setColorNav] = useState(false);
  const [authBox, setAuthBox] = useState(false)
  
  const openCart = () => {
        setCartContainer(!cartContainer)
    }
    const totalItems = useSelector(getTotalArticles);

    const burgerActiv = () => {
      setBurger(!burger);
    }

    const authBoxActiv = () => {
      setAuthBox(!authBox);
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10){
        setColorNav(true)
        }
        else if (scrolled <= 10){
        setColorNav(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);
    
  return (
    <div>
      <Router>
        <nav className={colorNav ? "navBarColor" : "navBar"}>
        <div className='container-logo'>
          <i className="fi fi-sr-room-service"></i>
          <p>Foodies</p>
        </div>
          <div>
            <Link to="/" className='link'>Home</Link>
          <Link to="/menu" className='link'>Menu</Link>
          <Link to="/about" className='link'>About Us</Link>
          <Link to="/contact" className='link '>Contacts</Link>
          </div>
          <div  className='link-cart'><i onClick={() => openCart()} className="linck-contact"><img src={shoppingCart} width="20px" alt='icon'/></i>
          {totalItems > 0 &&
              <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
              }
              <button onClick={() => authBoxActiv()} className='btn-auth'><img src={user} width="20px" alt='icon'/></button>
              <button onClick={() => burgerActiv()} className='burger'><i className="fas	fa-bars"></i></button>
          </div>
          
         
        </nav>
        <div className={burger ? 'container-burger-activ' : 'container-burger'} >
            <button className='btn-close-burger' onClick={() => burgerActiv()}><i className='fas	fa-times'></i></button>
            <Link  onClick={() => burgerActiv()}  to="/" className='link-burger link-burger1'>Home</Link>
            <Link  onClick={() => burgerActiv()} to="/menu" className='link-burger'>Menu</Link>
            <Link  onClick={() => burgerActiv()} to="/about" className='link-burger'>About Us</Link>
            <Link  onClick={() => burgerActiv()} to="/contact" className='link-burger'>Contacts</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/cart" element={<Cart/>}/> */}
        </Routes>
      </Router> 
        <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
            <div className='box-close-cart'>
              <button className='btn-close-cart' onClick={() => openCart()}><i className='fas	fa-times'></i></button>
            </div>
          <Cart/>
          {totalItems === 0 ? '' : <StripeContainer />}
        </div>

        <div className={cartContainer ? 'phoneContainer-cart-true' : 'phoneContainer-cart-false'}>
            <div className='box-close-cartPhone'>
              <button className='btn-close-cartPhone' onClick={() => openCart()}><i className="fas	fa-caret-down"></i></button>
            </div>
          <Cart/>
          {totalItems === 0 ? '' : <StripeContainer />}
        </div>
        
        <div className={ authBox ? 'auth-containe-true' : 'auth-containe-false'}>
          <div className='box-close-cart'>
            <button className='btn-close-cart' onClick={() => authBoxActiv()}><i className='fas	fa-times'></i></button>
          </div>
          <div className='box-auth'>
            <Account/>
            <Login/>
            <Logout/>
          </div>
        </div>
        <Toaster 
          toastOptions={{
            
            error: {
              style: {
                // background: 'white',
                // padding: '20px'
              }
            },
          }}/>
              
    </div>
  );
}

export default App;
