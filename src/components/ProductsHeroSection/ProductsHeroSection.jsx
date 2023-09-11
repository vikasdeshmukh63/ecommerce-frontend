import "./productsherosection.scss"

const ProductsHeroSection = ({ bannerImg, heading, subtitle }) => {
  return (
    <div className="products-hero-section" style={{ backgroundImage: `url(${bannerImg})` }}>
      <h2>{heading}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default ProductsHeroSection
