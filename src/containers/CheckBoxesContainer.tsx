import React, { useContext } from "react";
import { Box } from "../types";
import "../styles/CheckBoxesContainer.css";
import BoxInput from "../components/BoxInput";
import { MyContext } from "../contexts/PasswordContext";

export default function CheckBoxesContainer() {
  const { boxes, generatePassword } = useContext(MyContext);

  return (
    <div className="main-boxes-container">
      {boxes.map((box: Box) => (
        <BoxInput
          key={box.id}
          id={box.id}
          name={box.name}
          checked={box.checked}
        />
      ))}
      <button type="button" onClick={generatePassword}>
        Create Password
      </button>
    </div>
  );
}
