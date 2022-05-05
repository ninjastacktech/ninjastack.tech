import { useState } from "react";
import "./css/App.css";
import { MainLogo } from "./components/MainLogo";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>

      <main>
        <MainLogo></MainLogo>
      </main>
    </div>
  );
}

export default App;
