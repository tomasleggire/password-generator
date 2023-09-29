import React, { useState } from "react";
import { Box } from "../types";

export default function usePassword() {
  const initialStatePassword = "P4$5W0rD!";
  const [newPassword, setNewPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  const [boxes, setBoxes] = useState<Array<Box>>([
    {
      id: 1,
      name: "Include Uppercase Letters",
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      checked: false,
    },
    {
      id: 2,
      name: "Include Lowercase Letters",
      characters: "abcdefghijklmnopqrstuvwxyz",
      checked: false,
    },
    {
      id: 3,
      name: "Include Numbers",
      characters: "0123456789",
      checked: false,
    },
    {
      id: 4,
      name: "Include Symbols",
      characters: "!@#$%^&*()",
      checked: false,
    },
  ]);

  const changefilteredBoxes = (id: number) => {
    const selectedBox = boxes.findIndex((box) => box.id == id);
    const newBoxes = [...boxes];
    newBoxes[selectedBox].checked = !newBoxes[selectedBox].checked;
    setBoxes(newBoxes);
    console.log(boxes);
  };

  const getFilteredCharacters = () => {
    let characters = "";
    boxes.forEach((box) => {
      if (box.checked) characters += box.characters;
    });
    return characters;
  };

  const generatePassword = () => {
    const characters = getFilteredCharacters();
    if (characters == "") {
      return;
    } else {
      let newPassword = "";
      for (let i = 0; i < rangeValue; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
      }
      setNewPassword(newPassword);
    }
  };

  return {
    initialStatePassword,
    newPassword,
    setNewPassword,
    rangeValue,
    setRangeValue,
    boxes,
    changefilteredBoxes,
    generatePassword,
  };
}
