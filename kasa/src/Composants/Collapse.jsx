import { Outlet, Link } from "react-router-dom";
import "../assets/SASS/Collapse.scss";

function Collapse() {
    return (
        <div className="collapse">
                <div className="collapse__container__title">
                    <h1>Fiabilité</h1>
                </div>
                <div className="collapse__container__content">
                    <Outlet />
                </div>
                <div className="collapse__container__title">
                    <h1>Respect</h1>
                </div>
                <div className="collapse__container__content">
                    <Outlet />
                </div><div className="collapse__container__title">
                    <h1>Service</h1>
                </div>
                <div className="collapse__container__content">
                    <Outlet />
                </div><div className="collapse__container__title">
                    <h1>Sécurité</h1>
                </div>
                <div className="collapse__container__content">
                    <Outlet />
                </div>
        </div>
    );
}

export default Collapse;