import React from "react";
import "../styles/BoxInput.css";

interface MyProps {
  key: number;
  name: string;
}

export default function BoxInput(props: MyProps) {
  return (
    <div className="main-checkbox-component">
      <input type="checkbox" />
      <p>{props.name}</p>
    </div>
  );
}
