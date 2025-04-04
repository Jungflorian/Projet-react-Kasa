import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Apropos from "./Pages/Apropos";
import Acceuil from "./Pages/Acceuil";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Acceuil />} />
        <Route path="Apropos" element={<Apropos />} />
      </Route>
    </Routes>
  );
};

export default App;
