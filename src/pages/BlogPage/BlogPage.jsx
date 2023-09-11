import ProductsHeroSection from "../../components/ProductsHeroSection/ProductsHeroSection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Pagination from "../../components/Pagination/Pagination";
import bannerImg from "../../assets/banner/b19.jpg";
import BlogSection from "../../components/BlogSection/BlogSection";
import "./blogPage.scss";

const BlogPage = () => {
  return (
    <section id="blog-page">
      <ProductsHeroSection
        bannerImg={bannerImg}
        heading="#readmore"
        subtitle="Read all case studies about our products!"
      />
      <BlogSection />
      <Pagination />
      <NewsLetter />
    </section>
  );
};

export default BlogPage;
