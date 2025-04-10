import { useParams } from "react-router-dom";

const Logements = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Détails du logement</h1>
      <p>Logement ID : {id}</p>
    </div>
  );
};

export default Logements;