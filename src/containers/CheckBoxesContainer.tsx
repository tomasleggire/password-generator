import React from "react";
import BoxInput from "../components/BoxInput";

export default function CheckBoxesContainer() {
  const boxes = [
    {
      id: 1,
      name: "LowerCase",
    },
    {
      id: 2,
      name: "UpperCase",
    },
    {
      id: 3,
      name: "Numbers",
    },
    {
      id: 4,
      name: "Symbols",
    },
  ];

  return (
    <div>
      {boxes.map((box) => (
        <BoxInput key={box.id} name={box.name} />
      ))}
    </div>
  );
}
