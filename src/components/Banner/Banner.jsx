import "./banner.scss"
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div id="banner" className="section-m1">
      <h4>Repair Service</h4>
      <h2>Up to <span>70% off</span> - All t-Shirts & Accessories</h2>
      <Button 
      text="Explore More" 
      goto="/products" 
      marginTop={"0px"} 
      />
    </div>
  )
}

export default Banner
