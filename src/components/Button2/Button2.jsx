//importing modules
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./button2.scss"


//component
const Button2 = ({ buttonText, goto }) => {

    const navigate = useNavigate();

    return (
        <button className="button2" onClick={() => { goto && navigate(goto) }}>
            {buttonText}
        </button>
    )
}

//defining proptypes
Button2.propTypes = {
    buttonText: PropTypes.string,
    goto: PropTypes.string
}

export default Button2
