import Header from "../Composants/Header"; 
import Footer from "../Composants/Footer";
import "../assets/SASS/Accueil.scss";
import Banniere from "../Composants/Banniere";

function Accueil() {
  return (
    <div className="accueil">
      <Header />
      <Banniere/>
      <Footer />
      <main>
      </main>
    </div>
  );
}

export default Accueil;