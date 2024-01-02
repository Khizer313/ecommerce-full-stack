import { MdClose } from "react-icons/md";
import Prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";



const Search = (props) => {


const [query,setQuery]=useState("");
const navigate = useNavigate();
const onChange = (e) => {
 setQuery(e.target.value)
}
//now our input query is equal to products title
let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
if(!query.length){
  data = null;
}

  return (
    <div className="search_modal">
      <div className="form_field">
        <input type="text" autoFocus placeholder="Search for products" value={query} onChange={onChange} />
        {/* for closing search box section */}
        <MdClose onClick={() => props.setShowSearch(false)} />
      </div>

      <div className="search_result_content">
        <div className="search_results" >
          {/* now we are mapping data and showing here */}
          {data?.data?.map(item =>  (
          <div key={item.id}  className="search_result_item" onClick={()=>{
          navigate('/product/' + item.id)
          props.setShowSearch(false)
        }}>
            <div className="img_container">
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="img" />
            </div>
            <div className="prod_details">
              <span className="name">{item.attributes.title}</span>
              <span className="name">{item.attributes.desc}</span>
            </div>
          </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
