import { Routes, Route } from "react-router-dom";
import Apropos from "./Pages/Apropos";
import Accueil from "./Pages/Accueil";
import Logements from "./Pages/page_logements";
import Page_erreur from "./Pages/Page_erreur"; 

const App = () => {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="logement/:id" element={<Logements />} /> {}
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Page_erreur />} />
    </Routes>
  );
};

export default App;