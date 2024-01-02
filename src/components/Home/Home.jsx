import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
    // here we are receiving value from api.js from provider and we are consuming that value using useContext hook in getProducts() and getCategories() function. than giving categories to category component and products products component as a prop.   
   const {categories,setCategories,products,setProducts} = useContext(Context)


    // here we are fechingg stapi data in using use effect and use effect contains function getCategories(), where we are fetching data actually, and that data is present at ../../utils/api 
 useEffect(()=>{
    getCategories();
    getProducts();

 },[])

 const getProducts = () =>{
  
    fetchDataFromApi("/api/products?populate=*").then(res => {
        console.log(res);
        setProducts(res);
    })
 }
 const getCategories = () =>{
    // we write it ?populate=* just for getting images or all the data in category, otherwise we are getting just text and  we are not able to get all the data 
    fetchDataFromApi("/api/categories?populate=*").then(res => {
        console.log(res);
        setCategories(res);
    })
 }



    return <div className="home">
        <Banner/>
        <div className="main_content">
            <div className="layout">
               <Category categories={categories}/>
               <Products headingText="Popular Products" products={products}/>

            </div>
        </div>
    </div>;
};

export default Home;
