// importing modules 
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./button.scss"


// component
const Button = ({ text, goto, marginTop }) => {

    const navigate = useNavigate()

    return (
        <div className="customButton" style={{ marginTop }}>
            <button
                onClick={() => { goto && navigate(`/${goto}`) }}
            >
                {text}
            </button>
        </div>
    )
}

//defining proptypes
Button.propTypes = {
    text: PropTypes.string,
    goto: PropTypes.string,
    marginTop: PropTypes.string,
}


export default Button
