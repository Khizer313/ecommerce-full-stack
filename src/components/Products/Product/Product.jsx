import {useNavigate} from 'react-router-dom'
import "./Product.scss";
import SingleProduct from '../../SingleProduct/SingleProduct';
// import Prod from '../../../assets/products/earbuds-prod-1.webp'

const Product = ({id,data}) => {
    const navigate = useNavigate()
    return( 
        // all products are showing here, so in onClick, when user click on any product he will goes to details of that product , means navigate to SingleProduct.jsx of SingleProduct component ,it means the will be /"product/:id", in products then to single product
     <div className="product_card" onClick={(()=>navigate("/product/" + id))}>
        <div className="thumbnail">
           <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="img" />
        </div>
        <div className="prod_details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>


        </div>
     </div>

    );
};

export default Product;
