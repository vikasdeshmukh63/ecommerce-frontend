// importing modules 
import Filter from "../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./featuredproductsection.scss";
import PropTypes from 'prop-types';


// components 
const FeaturedProductSection = ({ products,title,des }) => {
    return (
        <section id="featuredProductSection" className="section-p1">
            {title && <h2>{title}</h2>}
            {des && <p>{des}</p>}
            <Filter/>
            <div className="pro-container">
                {
                    products.map((item, index) => {
                        return <ProductCard
                            key={index}
                            product={item} />
                    })
                }
            </div>
        </section>
    )
}

// defining proptype
FeaturedProductSection.propTypes = {
    products:PropTypes.array,
    title:PropTypes.string,
    des:PropTypes.string
}

export default FeaturedProductSection
