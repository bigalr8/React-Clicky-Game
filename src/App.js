//App.js - Root component 

//Import both, the default React object, and the named Component object, from react module 
import React, {Component } from "react";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import images from "./images.json";

//Create App stateful component which will render scores and cards depending on its current state 
class App extends Component {

//State object describes all parts of the app that can change over time.
//It is then, in effect, the entire state of this app.  
//We explicitly tell React of state change by calling this.setState inside the Component or its children,
//causing the re-rendering of the entire app.
    state = {
        images,
        score: 0,
        topscore: 0
    }

    clickSort = () => {
        this.state.images.sort(() => Math.random() - 0.5);
        this.setState({images});
        return true;
    }

    render() {
        console.log("App.render()")
        return(
            <Wrapper>
                <Header><div> Clicky Game</div> </Header>
                <Instructions>Clicky Game!</Instructions>
                {this.state.images.map(image => (
                    <Image
                        clickSort = {this.clickSort}
                        id={image.id}
                        key={image.id}
                        alt={image.alt}
                        src={image.src}
                        />
                ))}
            </Wrapper>
        );
    }

};

export default App;
