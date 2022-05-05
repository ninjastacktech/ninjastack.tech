import { useState } from "react";
import "./css/App.css";
import { MainLogo } from "./components/MainLogo";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Draggable from "react-draggable";
import backgroundImg from "./images/background3.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img className="background-img" src={backgroundImg} alt=""></img>
      <Header></Header>

      <main className="relative">
        <MainLogo></MainLogo>
        <CardsContainer></CardsContainer>
      </main>
    </div>
  );
}

export default App;
