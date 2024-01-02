import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'

import "./Cart.scss";
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import { Context } from '../../utils/context';

const Cart = (props) => {
  const {cartItems,cartSubTotal}=useContext(Context)
    return (
      <div className="cart_panel">
        <div className="opacity_layer"></div>
        <div className="cart_content">
           <div className="cart_header">
            <div className="heading">Shopping Cart</div>
            <span className="close_btn" onClick={()=>props.setShowCart(false)}>
                <MdClose/>
                <span className="text">Close</span>
            </span>
           </div>

{/*------ if there is no item in the cart then show this empty named section and cart footer */}

       { !cartItems?.length && <div className="empty_cart">
        <BsCartX/>
        <span>No Product In The Cart</span>
        <button className='return_btn'>Return To Shop</button>
       </div> }

       {!!cartItems?.length && <>
{/*------ if there is an item in the cart then show <CartItem/> and cart foorer */}
       <CartItem/>
       <div className="cart_footer">
        <div className="subTotal">
            <span className="text">subtotal:</span>
            <span className="text total">&#8377;{cartSubTotal}</span>
        </div>
        <div className="btn">
            <button className='checkOut_cta'>Checkout</button>
        </div>
       </div>
       </> }






        </div>
      </div>
    );
};

export default Cart;
