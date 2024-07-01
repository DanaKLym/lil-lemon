import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Reserve from "./Reserve";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
