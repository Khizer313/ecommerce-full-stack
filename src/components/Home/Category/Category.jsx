// import cat1 from "../../../assets/category/cat-1.jpg";
import {useNavigate} from 'react-router-dom'
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  if (!categories || !categories.data) {
    return console.log("hmmm") // Or display an appropriate message
  }
  return (
    <div className="shop_By_Category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={(()=> navigate(`/category/${item.id}`))}>
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

{
  /* <div className="category">
  <img src={cat1} alt="img" />
</div>
<div className="category">
  <img src={cat1} alt="img" />
</div>
<div className="category">
  <img src={cat1} alt="img" />
</div> */
}
