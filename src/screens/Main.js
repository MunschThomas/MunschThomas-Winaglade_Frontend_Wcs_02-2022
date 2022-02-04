import "./styles/Main.css";
import Background from "../assets/background.png";
import HorseMan from "../assets/horseman.png";
import HorseMan2 from "../assets/horseman2.png";
import HorseMan3 from "../assets/horseman3.png";
import Video1 from "../assets/Mavideo.mp4";
import Video2 from "../assets/Mavideo2.mp4";
import Video3 from "../assets/Mavideo3.mp4";

import CardsBestPlayers from "../components/CardsBestPlayers";
import Contact from "../components/Contact";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Main = () => {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [" Parier ", " Gagner", " Vibrer"], // Strings to display
  //     // Speed settings, try diffrent values untill you get good results
  //     startDelay: 300,
  //     typeSpeed: 120,
  //     backSpeed: 80,
  //     backDelay: 700,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: " !",
  //     autoInsertCss: true,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div className="home">
      <div className="homeIntro">
        {/* <img src={Background} alt="gladiator"></img> */}
        <div className="homeIntroImg"></div>
        <div className="homeIntroText">
          <h1>
            AVE Casear,
            <br />
            morituri
            <br /> te salutant
          </h1>
          <h2>
            WinaGlade,
            <br /> le premier site de paris sportif Romain
          </h2>
        </div>
      </div>
      <div className="paris">
        <div className="horseMan">
          {" "}
          <img src={HorseMan} alt=""></img>
        </div>
        <div className="horseDad">
          <div className="horse">🐎</div>
        </div>
        <div className="horseMan2">
          {" "}
          <img src={HorseMan} alt=""></img>
        </div>
        <div className="horseMan3">
          {" "}
          <img src={HorseMan2} alt=""></img>
        </div>
        <div className="horseMan4">
          {" "}
          <img src={HorseMan3} alt=""></img>
        </div>
        <div className="horseDad2">
          <div className="horse">🐎</div>
        </div>{" "}
        <div className="horseDad3">
          <div className="horse">🐎</div>
        </div>{" "}
        <div className="horseDad4">
          <div className="horse">🐎</div>
        </div>
        <div className="horseDad5">
          <div className="horse">🐎</div>
        </div>
        <Link to="/Bet">
          <h2 className="Link">
            <img
              className="parisIcon"
              src="https://img.icons8.com/ios/50/000000/money-bag.png"
              alt="paris"
            />
            Cliquez Ici pour Parier
            {/* Cliquez Ici pour <span ref={el}></span> */}
            <img
              className="parisIcon"
              src="https://img.icons8.com/ios/50/000000/money-bag.png"
              alt="paris"
            />
          </h2>
        </Link>
        <div className="parisImg">
          <div className="parisImgCourseDad">
            <div className="parisImgCombat">
              <div className="parisImgCourseVideo">
                <video
                  autoplay="true"
                  mute="true"
                  loop
                  src={Video1}
                  width="300px"
                  height="200px"
                  muted
                ></video>
              </div>
              {/* <img
              src='https://static.actu.fr/uploads/2019/03/GladiateurWeb-960x640.png'
              alt='gladiateur'
            ></img> */}
              <p>Gladiateurs</p>
            </div>
          </div>
          <div className="parisImgCourse">
            {/* <img
              src="https://static.actu.fr/uploads/2019/03/GladiateurWeb-960x640.png"
              alt="gladiateur"
            ></img> */}{" "}
            <div className="parisImgCourseVideo" id="yougouu">
              <video
                autoplay="true"
                mute="true"
                loop
                src={Video2}
                width="300px"
                height="200px"
                muted
              ></video>
            </div>
            <p>Course de chars</p>
          </div>{" "}
          <div className="parisImgCourse">
            {/* <img
              src="https://static.actu.fr/uploads/2019/03/GladiateurWeb-960x640.png"
              alt="gladiateur"
            ></img> */}{" "}
            <div className="parisImgCourseVideo">
              <video
                autoplay="true"
                mute="true"
                loop
                src={Video3}
                width="300px"
                height="200px"
                muted
              ></video>
            </div>
            <p>Animaux</p>
          </div>
        </div>
      </div>
      <div className="homeBestPlayers">
        <h2>
          <img
            src="https://img.icons8.com/ios/50/000000/laurel-wreath.png"
            alt="laurier"
          />{" "}
          Gladiateur du mois
          <img
            src="https://img.icons8.com/ios/50/000000/laurel-wreath.png"
            alt="laurier"
          />
        </h2>
        <div className="homeBestPlayersCards">
          <div className="homeBestPlayersCards2">
            <CardsBestPlayers
              name="JeanFulusse"
              back="https://i.pinimg.com/736x/98/24/40/982440e2f39c73420e1859f92398b1e4.jpg"
              color="silver"
            />
          </div>
          <div className="homeBestPlayersCards1">
            <CardsBestPlayers
              name="Rackatus"
              back="https://cdn-aljaj.nitrocdn.com/XHnEaystnzrPBayqKnFkRFpYTfNVJYcs/assets/static/optimized/rev-c2f8589/www.listland.com/wp-content/uploads/2015/08/3fa1668b589a2c5a9184cf8a68233ad9.Top-10-Cool-Facts-About-Roman-Gladiators-e1439308831329.jpg"
              color="gold"
            />
          </div>
          <div className="homeBestPlayersCards3">
            <CardsBestPlayers
              name="Hectorus"
              back="https://us.123rf.com/450wm/fxquadro/fxquadro1504/fxquadro150400824/38815691-gladiator-couvert-de-maintien-de-sang-couper-la-t%C3%AAte-dans-sa-main.jpg?ver=6"
              color="peru"
            />
          </div>
        </div>
      </div>
      <div className="infoGame">
        <a href="https://www.joueurs-info-service.fr/">
          JOUER COMPPORTE DES RISQUES : ENDETTEMENT, ISOLEMENT, DÉPENDANCE
          <br />
          POUR ETRE AIDÉ , CONTACTER LE SCRIPT OTIS. (discussion non surtaxé)
        </a>
      </div>
      <div className="homeContact">
        <h2 className="homeContacth2">Contact</h2>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
