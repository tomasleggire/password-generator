import React from "react";
import "../styles/CheckBoxesContainer.css";
import BoxInput from "../components/BoxInput";

export default function CheckBoxesContainer() {
  const boxes = [
    {
      id: 1,
      name: "Include Uppercase Letters",
    },
    {
      id: 2,
      name: "Include Lowercase Letters",
    },
    {
      id: 3,
      name: "Include Numbers",
    },
    {
      id: 4,
      name: "Include Symbols",
    },
  ];

  return (
    <div className="main-boxes-container">
      {boxes.map((box) => (
        <BoxInput key={box.id} name={box.name} />
      ))}
    </div>
  );
}
