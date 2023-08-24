import { useState } from "react";
import "./App.css";
import HousesContainer from "./containers/HousesContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HousesContainer />
    </>
  );
}

export default App;
