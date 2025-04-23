import { useParams } from "react-router-dom";
import logements from "../logements.json";
import "../assets/SASS/Logements.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import fleche from "../Media/Vector.png";

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="logement">
      <div className="logement-image">
        <img src={logement.cover} alt={logement.title} className="img-logement" />
      </div>
      <h1 className="titre">{logement.title}</h1>
      <div className="profil">
        <p className="host">{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
      </div>
      <h2 className="location">{logement.location}</h2>
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="bloc-collapse">
        <input type="checkbox" id="collapse" className="collapse-checkbox" />
        <label htmlFor="collapse" className="collapse-container-title">
          <h1 className="description">Description</h1>
          <img src={fleche} alt="fleche" className="fleche2"/>
        </label>
      <div className="collapse-content">
        <p>{logement.description}</p>
      </div>
      </div>
      <div className="bloc-collapse2">
      <input type="checkbox" id="collapse" className="collapse-checkbox" />
        <label htmlFor="collapse" className="collapse-container-title">
          <h1 className="description">Description</h1>
          <img src={fleche} alt="fleche" className="fleche2"/>
        </label>
      <div className="collapse-content">
        <p>{logement.description}</p>
      </div>
      </div>
      </div>
  );
};

export default Logements;