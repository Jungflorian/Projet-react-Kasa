import Header from "../Composants/Header"; 
import Footer from "../Composants/Footer";
import "../assets/SASS/Accueil.scss";
import Banniere from "../Composants/Banniere";
import Cards from "../Composants/Cards";

function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <main>
      <Banniere/>
      <Cards/>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;