import React from "react";
import { ChildrenProps } from "../types";
import '../styles/MainLayout.css';

export default function MainLayout(props: ChildrenProps) {
   return (
    <div className="main-app-container">
        <div className="main-app">
          {props.children}
        </div>
    </div>
   )
}