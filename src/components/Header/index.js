//components/Header.js

import React from "react";
//TO DO - Add stylesheet *** Fixed ***
import "./style.css";

function Header(props) {
    return <div className="header">
        <span className="game">{props.game}</span>
        <span className="headinstr">{props.headinstr}</span> 
        <span className="scores">Score: {props.score} | Top Score: {props.topscore}</span> 
        </div>
}
export default Header;