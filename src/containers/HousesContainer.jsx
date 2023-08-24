import { useState } from "react";
import { useEffect } from "react";
import AddHouseForm from "../components/AddHouseForm.jsx";

const HousesContainer = () => {
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
      {houses.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Title title="Houses" />
          <AddHouseForm houses={houses} setHouses={setHouses} />
        </>
      )}
    </>
  );
};

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

export default HousesContainer;
