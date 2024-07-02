import React, { useState } from "react";

export default function Radio() {
  const genders = [
    {
      id: 1,
      name: "Nam",
    },
    {
      id: 2,
      name: "Nữ",
    },
    {
      id: 3,
      name: "Khác",
    },
  ];

  const [genderValue, setGenderValue] = useState(2);

  const handleChange = (id) => {
    setGenderValue(id);
  };

  return (
    <div>
      {genders.map((gender) => (
        <>
          <input
            checked={gender.id === genderValue}
            onChange={() => handleChange(gender.id)}
            id={gender.name}
            type="radio"
          />{" "}
          <label htmlFor={gender.name}>{gender.name}</label>
        </>
      ))}
    </div>
  );
}
