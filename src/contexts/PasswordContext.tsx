import React, { createContext } from "react";
import { ChildrenProps } from "../types";
import usePassword from "../hooks/usePassword";

export const MyContext = createContext<any>(null);

export const MyContextProvider = (props: ChildrenProps) => {
  const {
    initialStatePassword,
    newPassword,
    setNewPassword,
    rangeValue,
    setRangeValue,
    generatePassword,
  } = usePassword();

  const contextValue = {
    initialStatePassword,
    newPassword,
    setNewPassword,
    rangeValue,
    setRangeValue,
    generatePassword,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};
