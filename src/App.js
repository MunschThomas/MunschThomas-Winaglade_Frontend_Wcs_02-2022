import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./screens/Main";
import Navbar from "./components/Navbar";
import Bet from "./screens/Bet";

function App() {
  const [theme, setTheme] = useState("");

  const changeTheme = (props) => {
    setTheme(props);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="rome" onClick={() => changeTheme("rome")}>
        <img
          src="https://img.icons8.com/ios/50/000000/coliseum.png"
          alt="rome"
        ></img>
      </div>
      <div className="egypte" onClick={() => changeTheme("egypte")}>
        <img
          src="https://img.icons8.com/pastel-glyph/64/000000/sphinx.png"
          alt="egypte"
        ></img>
      </div>
      <div className="grece" onClick={() => changeTheme("grece")}>
        <img
          src="https://img.icons8.com/ios/50/000000/greek-helmet.png"
          alt="greece"
        ></img>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Bet" element={<Bet />} />
      </Routes>
    </div>
  );
}

export default App;
