import Footer from "../Composants/Footer";
import Header from "../Composants/Header";
import Logements from "../Composants/Logements"; 
import "../assets/SASS/Logements.scss";

function Page_logements () {
  return (
    <div className="page-logement">
      <Header />
      <Logements />
      <Footer />
    </div>
  );
}

export default Page_logements;