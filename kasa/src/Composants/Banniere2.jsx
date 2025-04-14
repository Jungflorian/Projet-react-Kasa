import { Outlet, Link } from "react-router-dom";
import "../assets/SASS/Banniere2.scss";
import paysageimage from "../Media/Paysage.png";

function Banniere2() {
  return (
    <div className="banniere2">
      <img src={paysageimage} alt="Paysage" className="paysage" />
    </div>
  );
}

export default Banniere2;