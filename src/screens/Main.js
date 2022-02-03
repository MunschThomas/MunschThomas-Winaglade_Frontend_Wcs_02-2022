import "./styles/Main.css";
import Background from "../assets/background.png";

import CardsBestPlayers from "../components/CardsBestPlayers";

const Main = () => {
  return (
    <div className="home">
      <div className="homeIntro">
        <img src={Background} alt="gladiator"></img>
        <div className="homeIntroText">
          <h1>
            AVE Casear,
            <br />
            morituri
            <br /> te salutant
          </h1>
          <h2>
            WinaGlade,
            <br /> le premier site de parie Romain
          </h2>
        </div>
      </div>
      <div className="paris">
        <h2>Les Paris</h2>
        <div className="parisImg">
          <img
            src="https://static.actu.fr/uploads/2019/03/GladiateurWeb-960x640.png"
            alt="gladiateur"
          ></img>
          <img
            src="https://static.actu.fr/uploads/2019/03/GladiateurWeb-960x640.png"
            alt="gladiateur"
          ></img>
        </div>
      </div>
      <div className="homeBestPlayers">
        <h2>🏆 Gladiateur du mois🏆</h2>
        <div className="homeBestPlayersCards">
          <div className="homeBestPlayersCards2">
            <CardsBestPlayers name="JeanFulusse" />
          </div>
          <div className="homeBestPlayersCards1">
            <CardsBestPlayers name="Rackatus" />
          </div>
          <div className="homeBestPlayersCards3">
            <CardsBestPlayers name="Hectorus" />
          </div>
        </div>
      </div>
      <div className="homeContact">
        <h2>Contact</h2>
        <input type="textarea" className=""></input>
      </div>
    </div>
  );
};

export default Main;
