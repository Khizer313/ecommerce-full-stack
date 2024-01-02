import { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import { Search, useNavigate } from "react-router-dom";
 import Cart from '../Cart/Cart'
import { Context } from "../../utils/context";

import "./Header.scss";
import Searching from "./Search/Search";

const Header = () => {
//a state from context.js
  const {cartCount}=useContext(Context)

const navigate = useNavigate();



  //-------- for search box showing and hiding
    const [showSearch, setShowSearch] = useState(false);


//-------- for cart box showing and hiding
  const [showCart, setShowCart] = useState(false);

//    for hiding navbar when Y_scrolling starts and showing navbar when Y_scrolling value is about 200px, we use useEffect() for getting scrolled value, when we able to get scrolled value in console, then we apply if/else condition, if Y-scrolling value reaches at 200 then, we use useState() for showing again  
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    //sticky_header scss is present at Header.scss, here class is main_header and scrolled value is false, when scrolled value gets setScrolled(true) then sticky_header will applies
    <>
    <header className={`main_header ${scrolled ? "sticky_header" : " "}`}>
      <div className="header_content">
        <ul className="left">
          <li onClick={()=> navigate('/')}>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center" onClick={()=> navigate('/')}>WEB DEV</div>
        <div className="right">
          <TbSearch onClick={()=>setShowSearch(true)} />
          <AiOutlineHeart />
          <span className="cart_icon" onClick={()=>setShowCart(true)}>
            <CgShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div>
      </div>
      {/* end of header-content */}
    </header>
    {/*----------------    ------- cart box--------  --------------------- */}
   {showCart && <Cart setShowCart={setShowCart}/>}
    {/*----------------    ------- search box--------  --------------------- */}
   {showSearch && <Searching setShowSearch={setShowSearch} />} 
    </>
  );
};

export default Header;
