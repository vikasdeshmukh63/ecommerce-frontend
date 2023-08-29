import BannerBox from "../BannerBox/BannerBox"
import bannerImg1 from "../../assets/banner/b17.jpg"
import bannerImg2 from "../../assets/banner/b10.jpg"
import bannerImg3 from "../../assets/banner/b7.jpg"
import bannerImg4 from "../../assets/banner/b4.jpg"
import bannerImg5 from "../../assets/banner/b18.jpg"
import "./smbanner.scss"
import TextBanner from "../TextBanner/TextBAnner"




const SmBanner = () => {
  return (
    <section id="sm-banner" className="section-p1">
      <BannerBox
        text1="crazy deals"
        text2="buy 1 get 1 free"
        text3="The best classic dress is on Sale"
        buttonText="Learn More"
        backgroundImage={bannerImg1}
      />
      <BannerBox
        text1="spring/summer"
        text2="upcoming season"
        text3="The best classic dress is on Sale"
        buttonText="collection"
        backgroundImage={bannerImg2}
      />
      <div className="text-banners">
        <TextBanner
          text1="seasonal sale"
          text2="Winter Colletion -50% OFF"
          backgroundImage={bannerImg3}
        />
        <TextBanner
          text1="new footwear collection"
          text2={`Spring / Summer ${new Date().getFullYear()}`}
          backgroundImage={bannerImg4}
        />
        <TextBanner
          text1="t-shirts"
          text2="New Trendy Prints"
          backgroundImage={bannerImg5}
        />
      </div>
    </section>
  )
}

export default SmBanner
