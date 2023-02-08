import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const slice  = createSlice({
    name:'cart',
    initialState: {
        cartItems: []
    },

    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                cartLength: state.cartItems,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
            
        toast.success('Item added to cart', {
            duration: 3000,
            position: 'bottom-left',
        });
            
        },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
              (cartItem) => cartItem.id !== action.payload.cartItemId
            );
      
            toast.error('Item removed from cart', {
              duration: 3000,
              position: 'bottom-left',
            });
          },
    }
})


export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
  };

export const getCartItems = state => state.cart.cartItems;
export  const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer;
