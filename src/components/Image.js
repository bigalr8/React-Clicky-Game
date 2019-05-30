//components/Image
import React from "react";

//TO DO - Add stylesheet

const Image = props => (
    <div className="Image">
        <div className="img-container">
            <img alt={props.alt} src={props.src} />
        </div>
    </div>
);
export default Image;