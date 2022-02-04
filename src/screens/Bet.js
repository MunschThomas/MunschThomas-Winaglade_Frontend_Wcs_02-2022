import Duel from "../components/Duel";

import "./styles/Bet.css";

const Bet = () => {
  const combat1L = "aa";
  const combat1W = "bb";

  const combat2L = "cc";
  const combat2W = "dd";

  const combat3L = "ee";
  const combat3W = "ff";

  return (
    <div className="wrapperBet">
      <h1>Les paris</h1>
      <h2>Munus</h2>
      <Duel combat={combat1L} combat2={combat1W} />
      <h2>Harmatodromia</h2>
      <Duel combat={combat2L} combat2={combat2W} />
      <h2>Venatio</h2>
      <Duel combat={combat3L} combat2={combat3W} />
    </div>
  );
};
export default Bet;
