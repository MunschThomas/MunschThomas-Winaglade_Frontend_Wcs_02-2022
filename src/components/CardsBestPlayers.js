import "./styles/CardsBestPlayers.css";

const CardsBestPlayers = (e) => {
  return (
    <div className="cardsBestPlayers">
      <img
        className="cardsBestPlayersImg"
        src="https://cdn.deguisetoi.fr/images/rep_art/gra/229/5/229593/kit-gladiateur-homme_229593.jpg"
        alt="gladiateur"
      ></img>
      <p>{e.name}</p>
    </div>
  );
};

export default CardsBestPlayers;
