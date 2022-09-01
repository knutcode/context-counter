import { HashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { CounterContext } from "./contexts/CounterContext";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <HashRouter>
      <div className="App">
        <CounterContext.Provider value={{ count, setCount }}>
          <LandingPage />
        </CounterContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
