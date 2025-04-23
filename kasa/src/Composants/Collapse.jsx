import { Outlet, Link } from "react-router-dom";
import "../assets/SASS/Collapse.scss";
import fleche from "../Media/Vector.png";

function Collapse() {
    return (
        <div className="collapse">
            <div className="collapse__container">
                <input type="checkbox" id="collapse1" className="collapse__checkbox" />
                <label htmlFor="collapse1" className="collapse__container__title">
                    <h1>Fiabilité</h1>
                    <img src={fleche} alt="fleche" className="fleche" />
                </label>
                <div className="collapse__content">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes.</p>
                </div>
            </div>
            <div className="collapse__container">
                <input type="checkbox" id="collapse2" className="collapse__checkbox" />
                <label htmlFor="collapse2" className="collapse__container__title">
                    <h1>Respect</h1>
                    <img src={fleche} alt="fleche" className="fleche" />
                </label>
                <div className="collapse__content">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                </div>
            </div>

            <div className="collapse__container">
                <input type="checkbox" id="collapse3" className="collapse__checkbox" />
                <label htmlFor="collapse3" className="collapse__container__title">
                    <h1>Service</h1>
                    <img src={fleche} alt="fleche" className="fleche" />
                </label>
                <div className="collapse__content">
                    <p>La qualité du service est au coeur de notre engagement chez Kasa.Nous veillons à ce que chaque interaction, que ce soit avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance</p>
                </div>
            </div>

            <div className="collapse__container">
                <input type="checkbox" id="collapse4" className="collapse__checkbox" />
                <label htmlFor="collapse4" className="collapse__container__title">
                    <h1>Sécurité</h1>
                    <img src={fleche} alt="fleche" className="fleche" />
                </label>
                <div className="collapse__content">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs chaque logement correspond aux criteres de sécurité établis par nos services. En laissant une notes aussi bien a l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurtié domestique pour nos hotes </p>
                </div>
            </div>
        </div>
    );
}

export default Collapse;