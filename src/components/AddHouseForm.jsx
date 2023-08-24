/* eslint-disable react/prop-types */
import { useState } from "react";

function AddHouseForm({ houses, setHouses }) {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <form action="">
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div>
        <label htmlFor="">Animal</label>
        <input
          type="text"
          onChange={(e) => setAnimal(e.target.value)}
          value={animal}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setHouses([...houses, { name, animal }]);
          setName("");
          setAnimal("");
        }}
      >
        Add House
      </button>
    </form>
  );
}

export default AddHouseForm;
