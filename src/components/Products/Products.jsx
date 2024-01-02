import Product from "./Product/Product";
import "./Products.scss";
const Products = ({products,innerPage,headingText}) => {
    if (!products || !products.data) {
        return console.log("hmmm") // Or display an appropriate message
      }
    return(
        <div className="products_container">
        {!innerPage && <div className="sec_heading">{headingText}</div>}
            <div className="products">
                {products?.data?.map((item)=>(
                <Product key={item.id} id={item.id} data={item.attributes} />
                ))}
                {/* <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/> */}
            </div>
       </div>
    );
};

export default Products;
