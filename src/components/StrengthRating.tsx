import React, { useContext } from "react";
import "../styles/StrengthRating.css";
import { MyContext } from "../contexts/PasswordContext";

export default function StrengthRating() {
  const { newPassword } = useContext(MyContext);

  let strength = 0;

  if (newPassword.length >= 4) {
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /\W/.test(newPassword);

    let count = 0;
    if (hasUpperCase) count++;
    if (hasLowerCase) count++;
    if (hasNumber) count++;
    if (hasSpecialChar) count++;

    if (count >= 3 && newPassword.length > 12) {
      strength = 4;
    } else if (count >= 2 && newPassword.length > 8) {
      strength = 3;
    } else if (count >= 2 && newPassword.length <= 8) {
      strength = 2;
    } else {
      strength = 1;
    }
  } else if (newPassword != "") {
    strength = 1;
  }

  return (
    <div className="strength-rating-container">
      <h5>STRENGTH</h5>
      <div className="strength-rating-unity-container">
        {Array(4)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`${
                i < strength
                  ? "strength-rating-unity-filled"
                  : "strength-rating-unity-empty"
              }`}
            ></div>
          ))}
      </div>
    </div>
  );
}

const styleNotFill = {};
