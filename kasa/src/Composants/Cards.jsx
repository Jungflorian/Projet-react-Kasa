import logements from "../logements.json";
import { Link } from "react-router-dom";
import "../assets/SASS/Cards.scss";

function Cards() {
    return (
        <div className="cards-container">
            {logements.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
                    <img src={logement.cover} alt={logement.title} className="card__image" />
                    <h2 className="card__title">{logement.title}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Cards;