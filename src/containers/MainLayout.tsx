import React from "react";
import '../styles/MainLayout.css';

interface MyProps {
    children: React.ReactNode;
}

export default function MainLayout(props: MyProps) {
   return (
    <div className="main-app-container">
        <div className="main-app">
          {props.children}
        </div>
    </div>
   )
}