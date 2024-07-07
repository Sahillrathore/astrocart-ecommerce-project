import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem("cartItem") != null ? JSON.parse(localStorage.getItem("cartItem")) : [];
const totalCartValue = localStorage.getItem("cartValue") != null ? JSON.parse(localStorage.getItem("cartValue")) : 0;
const cartQuantity = localStorage.getItem("cartQty") != null ? JSON.parse(localStorage.getItem("cartQty")) : 0;

const initialState = {

    cartItems: items,
    cartValue: totalCartValue,
    cartQty: cartQuantity
}

export const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const findex = state.cartItems.findIndex((elem) => elem.title === action.payload.title);

            if(findex >= 0) {
                state.cartQty += 1;
                state.cartItems[findex].proQty += 1;
                state.cartValue += parseInt(action.payload.price);
            } 
            else {

                state.cartQty += 1;
                const proItems = { ...action.payload, proQty: 1 }
                state.cartItems.push(proItems);
                state.cartValue += parseInt(action.payload.price);
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem("cartValue", JSON.stringify(state.cartValue))
            localStorage.setItem("cartQty", JSON.stringify(state.cartQty))
            
        },
        removeFromCart: (state, action) => {

            const indexOfProd = state.cartItems.findIndex((elem) => elem.slug === action.payload.slug );

            if(indexOfProd >= 0 ) {
                if(state.cartItems[indexOfProd].proQty > 1 ) {
                    state.cartItems[indexOfProd].proQty -= 1;
                    state.cartQty -= 1;
                    state.cartValue -= parseInt(action.payload.price);
                }

                else {
                    state.cartQty -= 1;
                    state.cartItems.splice(indexOfProd, 1);
                    state.cartValue -= parseInt(action.payload.price);

                }
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem("cartValue", JSON.stringify(state.cartValue))
            localStorage.setItem("cartQty", JSON.stringify(state.cartQty))
        },
        deleteFromCart: (state, action) => {
            const findex = state.cartItems.findIndex((elem) => elem.slug === action.payload.slug);

            if(findex >= 0) {
                state.cartQty -= state.cartItems[findex].proQty
                state.cartItems.splice(findex, 1);

                state.cartValue -= (action.payload.price * action.payload.proQty);
            } 

            localStorage.setItem("cartItem", JSON.stringify(state.cartItems.map(item => item)))
            localStorage.setItem("cartValue", JSON.stringify(state.cartValue))
            localStorage.setItem("cartQty", JSON.stringify(state.cartQty))
        }
    }
})

export const {addToCart, removeFromCart, deleteFromCart} = cartslice.actions;
export default cartslice.reducer;
