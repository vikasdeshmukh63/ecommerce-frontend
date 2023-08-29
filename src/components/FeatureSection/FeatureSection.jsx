import img1 from "../../assets/features/f1.png"
import img2 from "../../assets/features/f2.png"
import img3 from "../../assets/features/f3.png"
import img4 from "../../assets/features/f4.png"
import img5 from "../../assets/features/f5.png"
import img6 from "../../assets/features/f6.png"
import "./feature.scss"


const featureBoxes = [
    {
        img: img1,
        text: "Free Shipping",
        color: "#fddde4"
    },
    {
        img: img2,
        text: "Online Order",
        color: "#cdebbc"
    },
    {
        img: img3,
        text: "Save Money",
        color: "#d1e8f2"
    },
    {
        img: img4,
        text: "Promotions",
        color: "#cdd4f8"
    },
    {
        img: img5,
        text: "Happy Sell",
        color: "#f6dbf6"
    },
    {
        img: img6,
        text: "24/7 Support",
        color: "#fff2e5"
    }
]

const FeatureSection = () => {
    return (
        <section id="feature" className="section-p1">
            {
                featureBoxes.map((item, index) => {
                    return <div key={index} className="fe-box">
                        <img src={item.img} alt={item.text} />
                        <h6 style={{ backgroundColor: item.color }}>{item.text}</h6>
                    </div>
                })
            }
        </section>
    )
}

export default FeatureSection
