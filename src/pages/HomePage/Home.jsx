import FeatureSection from "../../components/FeatureSection/FeatureSection";
import FeaturedProductSection from "../../components/FeaturedProductSection/FeaturedProductSection"
import HeroSection from "../../components/HeroSection/HeroSection"
import Banner from "../../components/Banner/Banner"
import SmBanner from "../../components/SmBanner/SmBanner"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import img1 from "../../assets/products/f1.jpg"
import img2 from "../../assets/products/f2.jpg"
import img3 from "../../assets/products/f3.jpg"
import img4 from "../../assets/products/f4.jpg"
import img5 from "../../assets/products/f5.jpg"
import img6 from "../../assets/products/f6.jpg"
import img7 from "../../assets/products/f7.jpg"
import img8 from "../../assets/products/f8.jpg"
import img9 from "../../assets/products/n1.jpg"
import img10 from "../../assets/products/n2.jpg"
import img11 from "../../assets/products/n3.jpg"
import img12 from "../../assets/products/n4.jpg"
import img13 from "../../assets/products/n5.jpg"
import img14 from "../../assets/products/n6.jpg"
import img15 from "../../assets/products/n7.jpg"
import img16 from "../../assets/products/n8.jpg"


const products1 = [
  {
    id: 1,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 33,
    productImg: img1
  },
  {
    id: 2,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 5,
    price: 54,
    productImg: img2
  },
  {
    id: 3,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 20,
    productImg: img3
  },
  {
    id: 4,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 1,
    price: 25,
    productImg: img4
  },
  {
    id: 5,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 2,
    price: 29,
    productImg: img5
  },
  {
    id: 6,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 4,
    price: 38,
    productImg: img6
  },
  {
    id: 7,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 4,
    price: 65,
    productImg: img7
  },
  {
    id: 8,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img8
  },
]

const products2 = [
  {
    id: 1,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img9
  },
  {
    id: 2,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img10
  },
  {
    id: 3,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img11
  },
  {
    id: 4,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img12
  },
  {
    id: 5,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img13
  },
  {
    id: 6,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img14
  },
  {
    id: 7,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img15
  },
  {
    id: 8,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img16
  },
]

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <FeaturedProductSection products={products1} title={"Featured Products"} des={"Summer Collection New Modern Design"} />
      <Banner />
      <FeaturedProductSection products={products2} title={"New Arrivals"} des={"Summer Collection New Modern Design"} />
      <SmBanner/>
      <NewsLetter/>
    </div>
  )
}

export default Home
