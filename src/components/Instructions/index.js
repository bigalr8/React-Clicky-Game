//components/Instructions

import React from "react";
//TO DO - Add stylesheet
import "./style.css";
function Instructions(props) {
    return <div className="instructionsdiv"><h1 className = "instructionstitle">{props.children}</h1></div>
     
}


export default Instructions;