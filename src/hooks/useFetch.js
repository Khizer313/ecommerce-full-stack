// this file is created for , "when any of category product is clicked then user goes to category/id and  that page we are going to show this below data that we are consuming from api.js". Now go to category.jsx to consume this api, and in category.jsx when user click on 1st category we are going to show all the products related to that category and we have total 4 categories, each category will shows different products

import { useEffect, useState } from "react";
 
// this is our fetch method in api.js File, where we are fetching api using .env File, now we are consuming that data
import { fetchDataFromApi } from '../utils/api';

const useFetch= (endpoint) => {
const [data,setData]=useState();

useEffect(()=>{
    makeApiCall();
},[endpoint])

const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res)

}

return { data }
}
export default useFetch;