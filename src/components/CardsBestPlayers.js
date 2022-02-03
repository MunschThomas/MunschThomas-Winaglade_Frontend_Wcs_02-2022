import "./styles/CardsBestPlayers.css";

const CardsBestPlayers = (e) => {
  return (
    <div
      className="cardsBestPlayers"
      style={{ backgroundImage: `url(${e.back})`, borderColor: e.color }}
    >
      {" "}
      <p style={{ color: e.color }}>{e.name}</p>
    </div>
  );
};

export default CardsBestPlayers;
