import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            visited: false,
            wall: false
        };
    }


    // function to handle the click event
    // this will need to be changed to click and drag event
    onClick = () => {
        if(this.state.wall){
            this.setState({wall: false});
        }
        else{
            this.setState({wall: true});
        }    
    }
    
    render() {
        const notWallStyle = {
            width: "20px",
            height: "20px",
            padding: "10px",
            border: "solid 1px black"
        };

        const wallStyle = {
            width: "20px",
            height: "20px",
            padding: "10px",
            border: "solid 1px black",
            backgroundColor: "grey"
        };


        return (
            <React.Fragment>
                <div
                style={this.state.wall ? wallStyle : notWallStyle} 
                onMouseDown={this.onClick}>
                </div>
            </React.Fragment>
        );


    }
}
 
export default Square;