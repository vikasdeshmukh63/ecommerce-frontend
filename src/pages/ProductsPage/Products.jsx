import ProductsHeroSection from "../../components/ProductsHeroSection/ProductsHeroSection"
import FeaturedProductSection from "../../components/FeaturedProductSection/FeaturedProductSection"
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
import Pagination from "../../components/Pagination/Pagination"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import heroBanner from "../../assets/banner/b1.jpg"



const products = [
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
  {
    id: 9,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img9
  },
  {
    id: 10,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img10
  },
  {
    id: 11,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img11
  },
  {
    id: 12,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img12
  },
  {
    id: 13,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img13
  },
  {
    id: 14,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img14
  },
  {
    id: 15,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img15
  },
  {
    id: 16,
    name: "Cartoon Astronaut T-Shirt",
    brand: "adidas",
    rating: 3,
    price: 45,
    productImg: img16
  },
]

const Products = () => {
  return (
    <section className="products-page">
      <ProductsHeroSection bannerImg={heroBanner} heading={"#stayhome"} subtitle={"Save more with coupons & up to 70% off!"}/>
      <FeaturedProductSection products={products} title={"Featured Products"} des={"Summer Collection New Modern Design"}/>
      <Pagination/>
      <NewsLetter/>
    </section>
  )
}

export default Products
