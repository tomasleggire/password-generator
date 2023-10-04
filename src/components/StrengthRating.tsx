import React, { useContext } from 'react';
import '../styles/StrengthRating.css';
import { MyContext } from "../contexts/PasswordContext"; 

export default function StrengthRating() {
    const { newPassword } = useContext(MyContext);

    let strength = 0;

    if (newPassword.length >= 4) {
      const hasUpperCase = /[A-Z]/.test(newPassword);
      const hasLowerCase = /[a-z]/.test(newPassword);
      const hasNumber = /\d/.test(newPassword);
      const hasSpecialChar = /\W/.test(newPassword);
  
      if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        strength = newPassword.length > 8 ? 3 : 2;
      } else if (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar) {
        strength = 1;
      }
    }
  
    return (
      <div className="strength-rating-container">
        <h5>STRENGTH</h5>
        <div className="strength-rating-unity-container">
        {Array(4).fill("").map((_, i) => (
          <div key={i} className={`${i < strength ? "strength-rating-unity-filled" : "strength-rating-unity"}`}></div>
        ))}
        </div>
      </div>
    );
}

const styleNotFill = {

}