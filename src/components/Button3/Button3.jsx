//importing modules
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./button3.scss"


//component
const Button3 = ({ buttonText, goto }) => {

    const navigate = useNavigate();

    return (
        <button className="button3" onClick={() => { goto && navigate(goto) }}>
            {buttonText}
        </button>
    )
}

//defining proptypes
Button3.propTypes = {
    buttonText: PropTypes.string,
    goto: PropTypes.string
}

export default Button3
