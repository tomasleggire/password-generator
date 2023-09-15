import React from "react";
import { ChildrenProps } from "../types";
import '../styles/OptinsLayout.css';

export default function OptinsLayout(props: ChildrenProps): JSX.Element {
    return (
        <div className="main-options-layout">{props.children}</div>
    )
}