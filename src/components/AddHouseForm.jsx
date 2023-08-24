import { useState } from "react";

function AddHouseForm({ houses, setHouses }) {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <>
      <h1>This is the Add House Form</h1>
    </>
  );
}

export default AddHouseForm;
