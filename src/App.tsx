import { useState } from "react";
import "./css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/CarouselExtra.css";
import { MainLogo } from "./components/MainLogo";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";


function App() {

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
