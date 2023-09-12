import React from 'react';
import { MyContextProvider } from './contexts/PasswordContext';

import MainLayout from './containers/MainLayout';
import Header from './components/Header';

export default function App() {
  return (
    <MyContextProvider>
      <MainLayout> 
        <Header />      
      </MainLayout>
    </MyContextProvider>
  );
}
