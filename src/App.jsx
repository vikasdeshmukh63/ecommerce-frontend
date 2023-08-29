import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/HomePage/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Products from "./pages/ProductsPage/Products"
import ProductDetails from "./components/ProductDetails/ProductDetails"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
