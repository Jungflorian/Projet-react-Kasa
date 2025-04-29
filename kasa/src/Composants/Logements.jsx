import { useParams } from "react-router-dom";
import { useState } from "react";
import logements from "../logements.json";
import "../assets/SASS/Logements.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import FlecheGauche from "../Media/Vector_left.png";
import FlecheDroite from "../Media/Vector_right.png";
import Erreur404 from "./Erreur404";
import Collapse from "./Collapse";
import Star from "../Media/Star.png";
import StarGray from "../Media/Star_Gray.png";

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (logement == undefined) {
    return <Erreur404 />;
  }

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
          <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
        </div>
        <div className="profil">
          <div className="profil-infos">
          <p className="host">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="host-picture"
          />
          </div>
          <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={index < logement.rating ? Star : StarGray}
              alt="Étoile"
              className="star"
            />
          ))}
        </div>
        </div>
      </div>
      
      <div className="bloc-collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipement">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index} className="equipement-list">
                {equipment}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logements;