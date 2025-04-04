import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <header>
            <img src="/Media/LOGO.png" alt="accueil" className="accueil"/>
            <Link to="/">Accueil</Link> | <Link to="/Apropos">À propos</Link>
        </header>
        <footer>
            <p>© 2020 Kasa. All rights reserved</p>
            <img src="/Media/LOGO.png" alt="logo" className="footer-logo" />
        </footer>
    </div>
  );
};

export default Layout;
