import "./App.css";
import Home from "./Home";

import { Route, Routes } from "react-router-dom";
import About from "./About";
import Reserve from "./Reserve";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
