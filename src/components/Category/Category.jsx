import Products from "../Products/Products";
import { useParams } from 'react-router-dom'
import "./Category.scss";
import useFetch from "../../hooks/useFetch";
const Category = () => {
  const { id }=useParams();
  // we are getting this data from useFetch.js file
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  return (
    <div className="category_main_content">
      <div className="layout">
        <div className="category_title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
        {/* here in <Products/> we don't need .sec_heading class , therefore go to Products component and change innerPage value to false , in this way we will only see .category_title of this page not .sec_heading of Products page*/}
        <Products innerPage={true} products={data}/>
      </div>
    </div>
  );
};

export default Category;
