//components/Header.js

import React from "react";
//TO DO - Add stylesheet *** Fixed ***
import "./style.css";

function Header(props) {
    return <div className="header">{props.children}</div>;
}

export default Header;