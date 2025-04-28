import { useParams } from "react-router-dom";
import { useState } from "react";
import logements from "../logements.json";
import "../assets/SASS/Logements.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import fleche from "../Media/Vector.png";
import Page_erreur from "../Pages/Page_erreur";
import FlecheGauche from "../Media/Vector_left.png";
import FlecheDroite from "../Media/Vector_right.png";

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="logement">
      <div className="carousel">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        {logement.pictures.length > 1 && (
          <>
            <button className="carousel-button prev" onClick={handlePrevImage}>
              <img src={FlecheGauche} alt="Précédent" />
            </button>
            <button className="carousel-button next" onClick={handleNextImage}>
              <img src={FlecheDroite} alt="Suivant" />
            </button>
          </>
        )}
      </div>
      <div className="logement-infos">
        <div className="logement-infos-container">
      <h1 className="titre">{logement.title}</h1>
      <h2 className="lieu">{logement.location}</h2>
      </div>
      <div className="profil">
        <p className="host">{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
      </div>
      </div>
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="bloc-collapse">
        <div className="collapse_logement">
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
        <div className="collapse_logement">
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