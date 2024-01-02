// import { createContext, useState } from "react";

// export const Context = createContext();

// const AppContext = ({ children }) =>{
//     return(
//         <Context.Provider>
//             {children}
//         </Context.Provider>
//     )
// }
// export default  AppContext
import { createContext, useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
export const Context = createContext();

const AppContext = ({ children }) =>{
    
    const [categories,setCategories]=useState();
    const [products,setProducts]=useState();
    //when url changes we will be on top
    const location =useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[location])
    // below  cartItems,  cartSubTotal, useEffect(), handleAddToCart(), handleRemoveFromCart(), handleCartProductQuantity() these are all used in cartItem.jsx and SingleProduct.jsx and cartCount for header.jsx
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartSubTotal,setCartSubTotal]=useState(0);

    useEffect(()=>{
      
        let count = 0;
        cartItems.map(item => count += item.attributes.quantity)
        setCartCount(count)


      let subTotal =0;
      cartItems.map(item => subTotal+=item.attributes.price * item.attributes.quantity);
      setCartSubTotal(subTotal)
    },[cartItems])

    const handleAddToCart=(product, quantity)=>{
        //here we access all the products 
        let items = [...cartItems];
        // here we are finding index of any product
        let index = items.findIndex(p => p.id === product.id)
        // if that index exists than we are increasing attributes quantity by +1
        if(index !== -1){
            items[index].attributes.quantity += quantity;
        }else{
            // if product didn't exist at that index 
            product.attributes.quantity = quantity
            items = [...items, product];

        }
        setCartItems(items)
    }
    const handleRemoveFromCart=(product)=>{
         //here we access all the products 
         let items = [...cartItems];
         items = items.filter((p) => p.id !== product.id)
         setCartItems(items)
    }
    const handleCartProductQuantity=(type, product)=>{
        //here we access all the products 
        let items = [...cartItems];
        // here we are finding index of any product
        let index = items.findIndex(p => p.id === product.id)
        if(type === 'inc'){
            items[index].attributes.quantity += 1
        }else if(type === 'dec'){
            if(items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items)
    }
    
    return(
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,
        }}>
            {children}
        </Context.Provider>
    )
}
export default  AppContext