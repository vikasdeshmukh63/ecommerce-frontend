import "./textbanner.scss"

const TextBanner = ({text1,text2,backgroundImage}) => {
  return (
    <div className="text-banner-box" style={{backgroundImage:`url(${backgroundImage})`}}>
      <h2>{text1.toUpperCase()}</h2>
      <h3>{text2}</h3>
    </div>
  )
}

export default TextBanner
