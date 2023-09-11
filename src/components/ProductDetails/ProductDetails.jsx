import { useState } from "react";
import f1 from "../../assets/products/f1.jpg";
import f2 from "../../assets/products/f2.jpg";
import f3 from "../../assets/products/f3.jpg";
import f4 from "../../assets/products/f4.jpg";
import f5 from "../../assets/products/f5.jpg";
import Button3 from "../Button3/Button3";
import "./productdetails.scss"
import Rating from '@mui/material/Rating';
import ProductReviewCard from "../ProductReviewCard/ProductReviewCard";

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const [mainImg, setMainImg] = useState(f1);

  // to make sure the qty should not be in minus 
  if (qty < 1) {
    setQty(1)
  }

  // function to change img on click 
  const handleImgChange = (e) => {
    // storing the previous img in nativeImg variable 
    const nativeImg = e.target.src;
    // swapping the place of the img we clicked and the main img 
    setMainImg((prev) => {
      e.target.src = prev;
      return nativeImg
    })
  }

  return (
    <>
      <section id="product-details" className="section-p1">
        <div className="single-pro-img">
          <img src={mainImg} width="100%" id="mainImg" alt="product img" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img src={f2} alt="product img" width="100%" className="small-img" onClick={handleImgChange} />
            </div>
            <div className="small-img-col">
              <img src={f3} alt="product img" width="100%" className="small-img" onClick={handleImgChange} />
            </div>
            <div className="small-img-col">
              <img src={f4} alt="product img" width="100%" className="small-img" onClick={handleImgChange} />
            </div>
            <div className="small-img-col">
              <img src={f5} alt="product img" width="100%" className="small-img" onClick={handleImgChange} />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-shirt</h6>
          <h4>Men&apos;s Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <div>
            <Rating
              name="read-only"
              readOnly
              size="large"
              value={3}
              style={{ fontSize: "20px", color: "tomato" }}
            />
            <p>344 ratings</p>
          </div>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <div>
            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
            <Button3 buttonText="Add to Cart" />
          </div>
          <h4>Product Details</h4>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem fugit, debitis, consequatur aperiam saepe ab laudantium accusantium voluptatem sit eaque blanditiis voluptates corrupti totam inventore dolor sunt vero soluta ipsum excepturi deleniti ducimus. Quo, vel? Quisquam quam adipisci et? Eveniet ullam, dolore ex numquam consequatur hic est ab unde!</span>
        </div>
      </section>
      <section id="product-reviews">
        <h4>Product Reviews</h4>
        <hr />
        <div>
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
        </div>
      </section>
    </>
  )
}

export default ProductDetails
