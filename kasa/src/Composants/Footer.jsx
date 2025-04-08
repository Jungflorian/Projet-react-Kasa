import { Outlet, Link } from "react-router-dom";
import logo from "../Media/LOGO.png";
import "../assets/SASS/Footer.scss";

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;