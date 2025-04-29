import { Routes, Route } from "react-router-dom";
import A_propos from "./Pages/A_propos";
import Accueil from "./Pages/Accueil";
import Logements from "./Pages/page_logements";
import Page_erreur from "./Pages/Page_erreur"; 

const App = () => {
  return (
    <Routes>
      <Route index element={<Accueil />} />
      <Route path="logement/:id" element={<Logements />} /> {}
      <Route path="*" element={<Page_erreur />} />
      <Route path="/apropos" element={<A_propos />} />
    </Routes>
  );
};

export default App;