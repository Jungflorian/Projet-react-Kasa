import { Link } from "react-router-dom";
import "../assets/SASS/Erreur404.scss";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";  
import Erreur404 from "../Composants/erreur404";

function Page_erreur () {
  return (
    <div className="erreur">
      <Header />
      <main>
        <Erreur404/>
      </main>
      <Footer />
    </div>
  );
};

export default Page_erreur;