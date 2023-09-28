import React, { useState } from "react";

export default function usePassword() {
  const initialStatePassword = "P4$5W0rD!";
  const [newPassword, setNewPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let newPassword = "";
    for (let i = 0; i < rangeValue; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setNewPassword(newPassword);
  };

  return {
    initialStatePassword,
    newPassword,
    setNewPassword,
    rangeValue,
    setRangeValue,
    generatePassword,
  };
}
