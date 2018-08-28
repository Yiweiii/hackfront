import React, { Component } from 'react';
import origRoom from './room.jpg';
import pinkRoom from './pinkRoom.jpg';
import blueRoom from './blueRoom.jpg';

class roomView extends Component {

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
                    { this.getRoomColor() }
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
        return <img src={userChoice} alt=""/>;
    }
}

export default roomView;