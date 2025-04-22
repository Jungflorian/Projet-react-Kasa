import { useParams } from "react-router-dom";
import logements from "../logements.json";
import "../assets/SASS/Logements.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="page-logement">
      <div className="logement-image">
      <img src={logement.cover} alt={logement.title} className="img-logement" />
      </div>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.host.name}</p>
      <p>{logement.rating}</p>
      <p>{logement.tags.join(", ")}</p>
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logements;