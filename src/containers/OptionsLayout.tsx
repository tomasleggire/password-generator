import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ChildrenProps } from "../types";
import "../styles/OptionsLayout.css";
import { MyContext } from "../contexts/PasswordContext";

export default function OptinsLayout(props: ChildrenProps): JSX.Element {
  const { generatePassword } = useContext(MyContext);

  return (
    <div className="main-options-layout">
      {props.children}
      <button type="button" onClick={generatePassword}>
        <span>GENERATE</span> <AiOutlineArrowRight className="button-icon" />
      </button>
    </div>
  );
}
