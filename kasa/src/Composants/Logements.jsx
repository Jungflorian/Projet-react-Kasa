import { useParams } from "react-router-dom";
import { useState } from "react";
import logements from "../logements.json";
import "../assets/SASS/Logements.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import fleche from "../Media/Vector.png";
import Page_erreur from "../Pages/Page_erreur";
import Erreur404 from "./Erreur404";

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (logement==undefined){
    return <Erreur404 />
  }
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);


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
        <div className="collapse">
          <div
            className="collapse-container-title"
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          >
            <h1 className="description">Description</h1>
            <img
              src={fleche}
              alt="fleche"
              className={`fleche2 ${isDescriptionOpen ? "open" : ""}`}
            />
          </div>
          {isDescriptionOpen && (
            <div className="collapse-content">
              <p>{logement.description}</p>
            </div>
          )}
        </div>
        <div className="collapse">
          <div
            className="collapse-container-title"
            onClick={() => setIsEquipementOpen(!isEquipementOpen)}
          >
            <h1 className="equipement">Équipement</h1>
            <img
              src={fleche}
              alt="fleche"
              className={`fleche2 ${isEquipementOpen ? "open" : ""}`}
            />
          </div>
          {isEquipementOpen && (
            <div className="collapse-content">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index} className="equipement-list">
                    {equipment}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logements;