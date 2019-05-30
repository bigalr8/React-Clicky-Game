//index.js 
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//TO DO - Add stylesheet 

//Call ReactDOM render method to "mount" an object into a DOM container. 
//ReactDOM.render() is called with a React element. 
//React calls the  corresponding component function or ES6 class 
//Typically the root component is rendered to the DOM root
console.log("Calling ReactDOm.render(App..");
ReactDOM.render(<App />, document.getElementById("root"));