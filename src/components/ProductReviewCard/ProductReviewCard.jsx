import "./productreviewcard.scss";
import img from "../../assets/people/1.png"
import { Rating } from "@mui/material";

<Rating
    name="read-only"
    readOnly
    size="large"
    value={3}
    style={{ fontSize: "20px", color: "tomato" }}
/>

const ProductReviewCard = () => {
    return (
        <div id="product-review-card">
            <img src={img} alt="profile-img" />
            <div>
                <Rating
                    name="read-only"
                    readOnly
                    size="large"
                    value={3}
                    style={{ fontSize: "20px", color: "tomato" }}
                />
                <h4>good product</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet qui, in repudiandae debitis distinctio voluptatem quo quam molestiae dolores blanditiis.</p>
            </div>
        </div>
    )
}

export default ProductReviewCard
