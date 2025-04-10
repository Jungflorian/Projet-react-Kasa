import { Routes, Route } from "react-router-dom";
import Apropos from "./Pages/Apropos";
import Accueil from "./Pages/Accueil";
import Logements from "./Pages/Logements";
import Erreur404 from "./Pages/Erreur404";

const App = () => {
  return (
    <Routes>
        <Route index element={<Accueil />} />
        <Route path="Apropos" element={<Apropos />} />
        <Route path="Logement/:id" element={<Logements />} />
        <Route path="*" element={<Erreur404 />} />
    </Routes>
  );
};

export default App;
