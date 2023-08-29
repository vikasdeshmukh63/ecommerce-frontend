import "./footer.scss"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import app from "../../assets/pay/app.jpg";
import play from "../../assets/pay/play.jpg";
import pay from "../../assets/pay/pay.png"

const Footer = () => {
    return (
        <footer id="footer" className="section-p1">
            <div className="col">
                <img className="logo" src={logo} alt="logo" />
                <h4>Contact</h4>
                <p><strong>Address: </strong>562 Wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone: </strong>+91 7972131927</p>
                <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>

                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <PinterestIcon />
                        <YouTubeIcon />
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About</h4>
                <Link to="#">About Us</Link>
                <Link to="#">Delivery Information</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Contact Us</Link>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <Link to="#">Sign In</Link>
                <Link to="#">View Cart</Link>
                <Link to="#">My Wishlist</Link>
                <Link to="#">Track My Orders</Link>
                <Link to="#">Help</Link>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src={app} alt="google play" />
                    <img src={play} alt="apple app store" />
                </div>
                <p>Secured Payment Gateway</p>
                <img src={pay} alt="cards" />
            </div>
            <div className="copyright">
                <p>Designed and Developed by Vikas Deshmukh | &copy;{new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
