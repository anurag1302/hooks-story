import Scroll from "./components/Scroll";
import Hover from "./components/Hover";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/hover" element={<Hover />} />
      </Routes>
    </Router>
  );
}

export default App;
