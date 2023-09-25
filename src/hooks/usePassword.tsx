import React, { useState } from "react";

export default function usePassword() {
  const initialStatePassword = "P4$5W0rD!";
  const [newPassword, setNewPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  return {
    initialStatePassword,
    newPassword,
    setNewPassword,
    rangeValue,
    setRangeValue,
  };
}
