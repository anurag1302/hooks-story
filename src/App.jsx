import Scroll from "./components/Scroll";
import Hover from "./components/Hover";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
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
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
