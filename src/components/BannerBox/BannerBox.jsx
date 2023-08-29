// importing modules 
import "./bannerbox.scss"
import Button2 from '../Button2/Button2'
import PropTypes from 'prop-types';

// component
const BannerBox = ({ text1, text2, text3, buttonText, backgroundImage }) => {
  return (
    <div className="banner-box" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h4>{text1}</h4>
      <h2>{text2}</h2>
      <span>{text3}</span>
      <Button2
        goto="/prouducts"
        buttonText={buttonText}
      />
    </div>
  )
}

// defining proptypes
BannerBox.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundImage: PropTypes.string,
}

export default BannerBox
