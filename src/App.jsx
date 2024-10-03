import { useState } from "react";
import Scroll from "./components/Scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Scroll />
    </>
  );
}

export default App;
