import React from 'react';
import './styles/App.css';
import { MyContextProvider } from './contexts/PasswordContext';

import Header from './components/Header';


export default function App() {
  return (
    <MyContextProvider>
      <div className="app">
        <Header />      
      </div>
    </MyContextProvider>
  );
}
