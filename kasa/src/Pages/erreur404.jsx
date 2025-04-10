import { Link } from "react-router-dom";
import "../assets/SASS/Erreur404.scss";

const Erreur404 = () => {
  return (
    <div className="erreur404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Erreur404;