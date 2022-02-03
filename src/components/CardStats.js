import "./styles/CardStats.css";
import gladiator from "../assets/gladiator.png";

const CardStats = () => {
  return (
    <div className="cardStatsContainer">
      <img src={gladiator} alt="" className="cardImage" />
      <div className="cardStats">
        <h2 className="cardName">ROMULUS</h2>
        {/* <div className="cardStatsFight"> */}
        <p className="cardStatsInfos att">ATT 95</p>
        <p className="cardStatsInfos def">DEF 85</p>
        <p className="cardStatsInfos agi">AGI 24</p>
        {/* </div> */}
        {/* <div className="cardStatsChar"> */}
        <p className="cardStatsInfos vit">VIT 45</p>
        <p className="cardStatsInfos acc">ACC 67</p>
        <p className="cardStatsInfos man">MAN 81</p>
        {/* </div> */}
        <p className="cardStatsLogos">logos</p>
      </div>
    </div>
  );
};

export default CardStats;
