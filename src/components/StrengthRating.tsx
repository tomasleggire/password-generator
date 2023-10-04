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
      <div>
        {Array(4).fill("").map((_, i) => (
          <span key={i} style={{ color: i < strength ? 'green' : 'red' }}>|</span>
        ))}
      </div>
    );
}