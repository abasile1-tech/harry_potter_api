import { useState } from "react";
import { useEffect } from "react";

function HousesContainer() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/Houses")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      });
  }, []);

  if (houses.length != 0) {
    console.log(houses);
  }

  return (
    <>
      <h1>Use Effect Lesson</h1>
      {houses.length == 0 ? <h1>Loading</h1> : <h1>Hello World</h1>}
    </>
  );
}

export default HousesContainer;
