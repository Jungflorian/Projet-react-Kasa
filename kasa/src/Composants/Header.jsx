import { Outlet, Link } from "react-router-dom";
import "../assets/SASS/Header.scss";
import logo from "../Media/LOGO.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="accueil" className="head_acceuil" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;