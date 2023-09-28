import React, { useContext } from "react";
import "../styles/CheckBoxesContainer.css";
import BoxInput from "../components/BoxInput";
import { MyContext } from "../contexts/PasswordContext";

export default function CheckBoxesContainer() {
  const { generatePassword } = useContext(MyContext);

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
      <button type="button" onClick={generatePassword}>
        Create Password
      </button>
    </div>
  );
}
