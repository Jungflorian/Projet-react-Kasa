import { Routes, Route } from "react-router-dom";
import Apropos from "./Pages/Apropos";
import Accueil from "./Pages/Accueil";
import Logements from "./Pages/Logements";
import page_erreur from "./Pages/page_erreur"; 

const App = () => {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="logement/:id" element={<Logements />} /> {}
      <Route path="*" element={<page_Erreur />} />
    </Routes>
  );
};

export default App;