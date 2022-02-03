import "./styles/Main.css";

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
          <div className="homeBestPlayers1"></div>
          <div className="homeBestPlayers2"></div>
          <div className="homeBestPlayers3"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
