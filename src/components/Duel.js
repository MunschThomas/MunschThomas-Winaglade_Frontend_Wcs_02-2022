import { useState, useEffect } from "react";
import CardsBestPlayers from "../components/CardsBestPlayers";
import CardsPlayer from "../components/CardsPlayer";

import axios from "axios";

export default function Duel(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [gladiators, setGladiators] = useState([]);
  const [idNum1, setIdNum1] = useState(props.combat);
  const [idNum2, setIdNum2] = useState(props.combat2);
  const [dataCote, setDataCote] = useState([]);
  const [cote1, setCote1] = useState(0);
  const [cote2, setCote2] = useState(0);
  

  const random = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const [random2, setRandom2] = useState(0);

  const changeClass = () => {
    setIsClicked(!isClicked);
    const cotetemp = [...props.coteTot]
    cotetemp.push(cote1)
    console.log("cote1 yo", cote1)
    props.setCoteTot(cotetemp)
    console.log("coteTot", props.coteTot)
  };
  



  const changeClass1 = () => {
    setIsClicked2(!isClicked2);
    const cotetemp = [...props.coteTot]
    cotetemp.push(cote2)
    props.setCoteTot(cotetemp)
    console.log("coteTot", props.coteTot)

  };

  // test haut
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get("http://localhost:4242/api/glad/")
        .then((res) => res.data)
        .then((res) => setGladiators(res));
    };

    const fetchCote = async () => {
      const resultat = await axios
        .get("http://localhost:4242/api/cotes/")
        .then((res) => res.data)
        .then((res) => setDataCote(res));
    };

    fetchData();
    fetchCote();

    setRandom2(Math.floor(Math.random() * 17));
  }, []);

  useEffect(() => {
    const coteFunc = (id, ep, set) => {
      dataCote.map((el) => {
        if (el.id === +id && el.name_epreuve === ep) {
          set(el.cote);
        }
      });
    };

    coteFunc(random2, props.epreuve, setCote1);
    coteFunc(random2 + 1, props.epreuve, setCote2);
  
  }, [dataCote]);

  // Test du button a 8h du matin
  const test8hdumatin = () => {
    const divtest = document.getElementById(idNum1);
    divtest.classList.toggle("looserBody");
    const divtest2 = document.getElementById(idNum2);
    divtest2.classList.toggle("winnerBody");
  };

  return (
    <div>
      {console.log("cote", cote1)}
      <div className="opponents">
        <div className="div1">
          <div id={idNum2}>
            {gladiators &&
              gladiators
                .slice(random[random2], random[random2] + 1)
                .map((gladiator) => (
                  <CardsPlayer
                    name={gladiator.name_glad}
                    key={gladiator.id}
                    backgroundImg={gladiator.imageSans}
                    agi={gladiator.AGI}
                    vit={gladiator.VIT}
                    acc={gladiator.ACC}
                    man={gladiator.MAN}
                    att={gladiator.ATT}
                    def={gladiator.DEF}
                    ville={gladiator.name_metier}
                    acc={gladiator.ACC}
                  />
                ))}

            {/* // ))} */}
          </div>
          <button
            onClick={() => changeClass()}
            className={isClicked ? "clickedCote" : "coteClass"}
          >
            {cote1}
          </button>
        </div>
        <div className="div6">
          <button onClick={test8hdumatin}>Attaque</button>
        </div>
        <div className="div5">
          <div id={idNum1}>
            {gladiators &&
              gladiators
                .slice(random[random2 + 1], random[random2 + 1] + 1)
                .map((gladiator) => (
                  <CardsPlayer
                    name={gladiator.name_glad}
                    key={gladiator.id}
                    backgroundImg={gladiator.imageSans}
                    agi={gladiator.AGI}
                    vit={gladiator.VIT}
                    acc={gladiator.ACC}
                    man={gladiator.MAN}
                    att={gladiator.ATT}
                    def={gladiator.DEF}
                    ville={gladiator.name_metier}
                    acc={gladiator.ACC}
                  />
                ))}
          </div>

          <button
            onClick={() => changeClass1()}
            className={isClicked2 ? "clickedCote" : "coteClass"}
          >
            {cote2}
          </button>
        </div>
      </div>
    </div>
  );
}
