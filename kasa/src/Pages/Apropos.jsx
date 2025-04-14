import Header from "../Composants/Header"; 
import Footer from "../Composants/Footer";
import "../assets/SASS/Apropos.scss";
import Banniere from "../Composants/Banniere";
import Banniere2 from "../Composants/Banniere2";

function Apropos() {
  return (
    <div className="apropos">
      <Header />
      <main>
        <Banniere2/>
      </main>
      <Footer />
    </div>
  );
}

export default Apropos;