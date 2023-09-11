import img1 from "../../assets/blog/b1.jpg";
import img2 from "../../assets/blog/b2.jpg";
import img3 from "../../assets/blog/b3.jpg";
import img4 from "../../assets/blog/b4.jpg";
import img6 from "../../assets/blog/b6.jpg";
import { Link } from "react-router-dom";
import "./blogsection.scss"

const dataArray = [
  {
    id: 1,
    title: "The Cotton-Jersey Zip-Up Hoodie",
    subTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum inventore eligendi aspernatur laboriosam enim laborum illo, et minima iste minus magnam nobis dolor.",
    img: img1,
    date: '12/03'
  },
  {
    id: 2,
    title: "How to Style a Quiff",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem, aliquam similique dolor ea perspiciatis, tempore modi id natus consequatur minima temporibus voluptates vel dignissimos accusantium autem quasi eius repudiandae impedit illum at, praesentium dolorum error eligendi. Ad assumenda molestias magnam maiores, culpa expedita eius architecto laudantium, libero nobis iure quod deleniti eaque vel corporis?",
    img: img2,
    date: '08/10'
  },
  {
    id: 3,
    title: "Must-Have Skater Girl Items",
    subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, est fugit. Officiis, sequi non aliquam similique dolor",
    img: img3,
    date: '10/03'
  },
  {
    id: 4,
    title: "Runway-Inspired Trends",
    subTitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia facilis quia esse illum fugit consequatur obcaecati cum, culpa iusto?",
    img: img4,
    date: '06/06'
  },
  {
    id: 4,
    title: "AW20 Menswear Trends",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit, nulla nesciunt voluptatum mollitia officiis magni quas in delectus voluptatem error facilis? Dolorem, architecto quae.",
    img: img6,
    date: '07/04'
  },
]

const BlogSection = () => {
  return (
    <>
      {
        dataArray.map((item, index) => {
          return <div key={index} className="blog-box">
            <div className="blog-img">
              <img src={item.img} alt="blog img" />
            </div>
            <div className="blog-details">
              <h4>{item.title}</h4>
              <p>
                {`${item.subTitle.substring(0, 100)}...`}
              </p>
              <Link to="#">Continue Reading</Link>
            </div>
            <h1>{item.date}</h1>
          </div>
        })
      }
    </>
  );
};

export default BlogSection;
