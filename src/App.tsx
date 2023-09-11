import React from 'react';
import './styles/App.css';
import PasswordContext from './contexts/PasswordContext';
import Header from './components/Header';

export default function App() {
  return (
    <PasswordContext.Provider value={undefined}>
    <div className="app">
      <Header />      
    </div>
    </PasswordContext.Provider>
  );
}
