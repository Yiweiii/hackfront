import React, { Component } from 'react';
// import roomView from './roomView.js';
// import origRoom from './room.jpg';
// import pinkRoom from './pinkRoom.jpg';
// import blueRoom from './blueRoom.jpg';
import './App.css';
import origRoom from "./room.jpg";
import pinkRoom from "./pinkRoom.jpg";
import blueRoom from "./blueRoom.jpg";

class App extends Component {
    constructor() {
        super();
        this.state = {
            roomChoice: 0,
            petChoice: 0
        }
    }

    handleChangeColor = () => {
        this.setState({ roomChoice: this.state.roomChoice + 1 });
    }

    render() {

        return (
            <div className="App">
                <button onClick = {this.handleChangeColor} className = "btn btn-secondary"></button>
                <div>
                    <img src={this.getRoomColor()} alt=""/>
                </div>
            </div>
        );
    }

    getRoomColor() {
        let userChoice = origRoom;
        if (this.state.roomChoice === 1) {
            userChoice = pinkRoom;
        } else if (this.state.roomChoice === 2) {
            userChoice = blueRoom;
        }
        return userChoice;
    }
}

export default App;
