import React, { useContext } from "react";
import { MyContext } from "../contexts/PasswordContext";
import "../styles/BoxInput.css";

interface MyProps {
  key: number;
  id: number;
  name: string;
  checked: boolean;
}

export default function BoxInput(props: MyProps) {
  const { changefilteredBoxes } = useContext(MyContext);

  return (
    <div className="main-checkbox-component">
      <div>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() => changefilteredBoxes(props.id)}
        />
      </div>
      <p>{props.name}</p>
    </div>
  );
}
