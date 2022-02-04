import "./styles/CardStats.css";
// import gladiator from '../assets/gladiator.png'

const CardStats = (props) => {
  return (
    <div className="cardStatsContainer">
      <img src={props.backgroundImg} alt="" className="cardImage" />
      <div className="cardStats">
        <h2 className="cardName">{props.name}</h2>
        {/* <div className="cardStatsFight"> */}
        <p className="cardStatsInfos att">{props.att} ATT</p>
        <p className="cardStatsInfos def">{props.def} DEF </p>
        <p className="cardStatsInfos agi">{props.agi} AGI</p>
        {/* </div> */}
        {/* <div className="cardStatsChar"> */}
        <p className="cardStatsInfos vit">{props.vit} VIT</p>
        <p className="cardStatsInfos acc">{props.acc} ACC</p>
        <p className="cardStatsInfos man">{props.man} MAN</p>
        {/* </div> */}
        <p className="cardStatsLogos">{props.ville}</p>
      </div>
    </div>
  );
};

export default CardStats;
