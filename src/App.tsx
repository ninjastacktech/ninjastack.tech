import { useState } from "react";
import "./css/App.css";
import { MainLogo } from "./components/MainLogo";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import Draggable from "react-draggable";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <Header></Header>

      <main className="relative">
        <MainLogo></MainLogo>
        <CardsContainer></CardsContainer>
      </main>
    </div>
  );
}

export default App;
