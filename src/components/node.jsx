import React, { Component } from 'react';

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: 0,
            col: 0,
            visited: false,
            wall: false
        };
    }
    /* Change(prop vs. state): since we are going to be updating the values of the 
    nodes from the grid component im going to change this to props instead
    of state. If we were going to change the values inside the node component
    we would use state instead. But now we are changing the values from the parent
    component which makes props more appropriate*/

    // function to handle the click event
    // this will need to be changed to click and drag event
    onClick = () => {
        if(this.props.wall){
            this.wall = false;
        }
        else{
            this.wall = true;
        }    
    }
    
    render() {
        const {
            row,
            col,
            wall,
            visited
        } = this.props;

        const notWallStyle = {
            width: "20px",
            height: "20px",
            padding: "10px",
            border: "solid 1px black",
            float: "left"
        };

        const wallStyle = {
            width: "20px",
            height: "20px",
            padding: "10px",
            border: "solid 1px black",
            backgroundColor: "grey",
            float: "left"
        };


        return (
            <React.Fragment>
                <div id= {"" + this.props.row + this.props.col}
                style={notWallStyle} 
                onMouseDown={this.onClick}>
                </div>
            </React.Fragment>
        );


    }
}
 
export default Node;