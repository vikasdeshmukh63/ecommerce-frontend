// importing modules 
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.scss"
import { useState } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

// component
const Header = () => {

    // using useLocation hook 
    const location = useLocation();

    // navigation opening state 
    const [open, setOpen] = useState(false);

    // function to handle open navbar 
    const handleOpen = () => {
        setOpen((prev) => {
            return !prev;
        });
    }

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: 0,
            top: 0,
            padding: '0 4px',
            color: 'white',
            backgroundColor: '#ef3636'
        },
    }));

    return (
        <header>
            {/* logo */}
            <Link>
                <img src={logo} alt="logo" />
            </Link>
            {/* navlinks */}
            <div>
                <ul className="navbar" style={{ right: open ? 0 : -300 }}>
                    <li><Link className={location.pathname === "/" ? "active" : undefined} to="/">Home</Link></li>
                    <li><Link className={location.pathname === "/products" ? "active" : undefined} to="/products">Products</Link></li>
                    <li><Link className={location.pathname === "/about" ? "active" : undefined} to="/about">About</Link></li>
                    <li><Link className={location.pathname === "/contact" ? "active" : undefined} to="/contact">Contact</Link></li>
                    <li><Link className={location.pathname === "/blog" ? "active" : undefined} to="/blog">Blogs</Link></li>
                    {/* cart and profile icons  */}
                    <li>
                        <Link to="/cart" className="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <LocalMallIcon sx={{ fontSize: "30px" }} />
                            </StyledBadge>
                        </Link>
                    </li>
                    <li><Link to="/profile" className="profile"><AccountCircleIcon sx={{ fontSize: "30px" }} /></Link></li>
                    {/* navclose icon  */}
                    <span className="closeIcon" onClick={handleOpen}><CloseIcon /></span>
                </ul>
            </div>
            {/* hamburger */}
            <div className="hamburger" onClick={handleOpen}>
                <Link to="/cart" className="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <LocalMallIcon sx={{ fontSize: "30px", color: "#1a1a1a" }} />
                    </StyledBadge>
                </Link>
                <MenuIcon />
            </div>
        </header>
    )
}

export default Header
