//components/Image
import React from "react";

//TO DO - Add stylesheet
import "./style.css";
const Image = props => (
    <div className="image" onClick={() => props.clickSort()}>
        <div className="img-container">
            <img align="middle" alt={props.alt} src={props.src} />
        </div>
    </div>
);
export default Image;