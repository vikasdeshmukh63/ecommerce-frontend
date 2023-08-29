import "./productcard.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';



//todo component start here
const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    // function for handle add to cart
    const handleAddToCart = () => {

    }

    // function for navigating user to specific product page 
    const handleNavigate = () => {
        navigate(`/product/${product?.id}`)
    }

    return (
        <div onClick={handleNavigate} className="product-card">
            <img src={product?.productImg} alt="img" />
            <div className="des">
                <span>{product?.brand}</span>
                <h5>{product?.name}</h5>
                <Rating
                    name="read-only"
                    readOnly
                    size="large"
                    value={product?.rating}
                    style={{fontSize:"20px",color:"tomato"}}
                />
                <h4>₹{product?.price}</h4>
            </div>
            <button onClick={handleAddToCart}><AddShoppingCartIcon /></button>
        </div>
    )
}


// performing prop validation

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        productImg: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
}


export default ProductCard
