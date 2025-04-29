import { useState } from "react";
import "../assets/SASS/Collapse.scss";
import fleche from "../Media/Vector.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="collapse__container__title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1>{title}</h1>
        <img
          src={fleche}
          alt="fleche"
          className={`fleche ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
};

export default Collapse;