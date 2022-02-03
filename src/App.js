import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Navbar from "./components/Navbar";
import CardStats from "./components/CardStats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<CardStats />} />
      </Routes>
    </div>
  );
}

export default App;
