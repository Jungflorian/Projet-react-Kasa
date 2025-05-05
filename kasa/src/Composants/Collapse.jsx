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
      <div
        className={`collapse-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;