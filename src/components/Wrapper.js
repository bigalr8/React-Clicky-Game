//components/Wrapper.js
import React from "react";
//TO DO - Add stylesheet

function Wrapper(props) {
    console.log("Wrapper called");
    return <div className ="wrapper">{props.children}</div>;
}

export default Wrapper;