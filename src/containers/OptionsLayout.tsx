import React, { useContext } from "react";
import "../styles/OptionsLayout.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ChildrenProps } from "../types";
import { MyContext } from "../contexts/PasswordContext";

import StrengthRating from "../components/StrengthRating";

export default function OptinsLayout(props: ChildrenProps): JSX.Element {
  const { generatePassword } = useContext(MyContext);

  return (
    <div className="main-options-layout">
      {props.children}
      <StrengthRating />
      <button type="button" onClick={generatePassword}>
        <span>GENERATE</span> <AiOutlineArrowRight className="button-icon" />
      </button>
    </div>
  );
}
