import "./styles/Main.css";

import CardsBestPlayers from "../components/CardsBestPlayers";

const Main = () => {
  return (
    <div className="home">
      <div className="homeIntro">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81OOLRQvTSL.jpg"
          alt="gladiator"
        ></img>
        <h1>AVE Casear, morituri te salutant</h1>
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
      <h2>Gladiateur aléatoire</h2>
      <div className="homePlayers">
        <CardsBestPlayers name="JeanFulusse" />
        <CardsBestPlayers name="JeanFulusse" />
        <CardsBestPlayers name="JeanFulusse" />
        <CardsBestPlayers name="JeanFulusse" />
        <CardsBestPlayers name="JeanFulusse" />
        <CardsBestPlayers name="JeanFulusse" />
      </div>
    </div>
  );
};

export default Main;
