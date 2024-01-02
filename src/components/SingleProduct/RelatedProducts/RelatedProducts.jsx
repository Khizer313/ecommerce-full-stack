import useFetch from '../../../hooks/useFetch';
import Products from '../../Products/Products'


const RelatedProducts = ({productId, categoryId}) => {
    //"[$ne]=${productId}" it means present product item notEqual($[ne]) to other category items, so product item on single product page have some related products but that related product didn't include present one and "&pagination[start]" it means only 4 product items will here , we want to show only 4 related product items
    const { data }= useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)
    return (
        <div className="related_products">
            <Products headingText="Related Products" products={ data } />
        </div>
    );
};

export default RelatedProducts;
