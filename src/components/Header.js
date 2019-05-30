//components/Header.js

import React from "react";
//TO DO - Add stylesheet *** Fixed ***

function Header(props) {
    return <div className="header">{props.children}</div>;
}

export default Header;