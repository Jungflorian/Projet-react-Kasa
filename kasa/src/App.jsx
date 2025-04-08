import { Routes, Route } from "react-router-dom";
import Apropos from "./Pages/Apropos";
import Acceuil from "./Pages/Acceuil";

const App = () => {
  return (
    <Routes>
        <Route index element={<Acceuil />} />
        <Route path="Apropos" element={<Apropos />} />
    </Routes>
  );
};

export default App;
