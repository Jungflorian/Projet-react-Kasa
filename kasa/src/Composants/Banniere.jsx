import { Outlet, Link } from "react-router-dom";
import "../assets/SASS/Banniere.scss";
import falaiseimage from "../Media/Falaise.png";


function Banniere() {
    return (
        <div className="banniere">
            <img src={falaiseimage} alt="Falaise" className="banniere__image" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banniere;