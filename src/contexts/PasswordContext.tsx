import React, { createContext } from 'react';
import usePassword from '../hooks/usePassword';

export const MyContext = createContext<any>(null);

interface MyProps {
    children: React.ReactNode
}

export const MyContextProvider = (props: MyProps) => {
  const { saludo } = usePassword();

  const contextValue = {
    saludo,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};


