import { useState, useContext } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import Prod from "../../assets/products/earbuds-prod-1.webp";
import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts'
import useFetch from '../../hooks/useFetch'
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const {handleAddToCart}= useContext(Context)

  // for increasing and decreasing in add to cart
 const [quantity,setQuantity]=useState(1)
 const increment =()=>{
  setQuantity((prevState)=> prevState + 1)
 }
 const decrement =()=>{
  setQuantity((prevState)=> {
    if(prevState===1) return 1;
    return prevState -1;
  })
 }

  const {id}=useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if(!data) return;
const product = data.data[0].attributes
  return (
    <div className="single_product_main_content">
      <div className="layout">
        <div className="single_product_page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="img" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart_buttons">
              <div className="q_btn">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="addCart" onClick={()=> {
                handleAddToCart(data.data[0], quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} /> Add to cart
              </button>
            </div>

            <span className="divider">
              <div className="info_item">
                <span className="text_bold">
                  Category:{" "}
                  <span>{ product.categories.data[0].attributes.title }</span>
                </span>
                <span className="text_bold">
                  Share:
                  <span className="social_icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </span>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
