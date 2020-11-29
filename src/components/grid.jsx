import React, { Component } from 'react';
import Node from './node'
/*This is the component where the main
functionality for our searchgrid lies.
It will handle generating the grid and 
keeping track of the position */
class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid: []
        }
    }

    // componentDidMount is called at the beginning of the session
    // this means that we create our grid immediatly
    componentDidMount() {
        console.log("mount");
        const grid = generateGrid();
        this.setState(grid);
        console.log(grid[0]);
    }
    
    render() {
        const grid = this.state.grid;
        const gridStyle = {
            display: "grid"
        };
        const rowStyle = {
            float: "left"
        };
        return ( 
            <React.Fragment>
                <div className="mainGrid">
                </div>
                <div style={gridStyle}>
                    <div style={rowStyle}>
                        <Node />
                        <Node />
                        <Node />
                        <Node />
                    </div>
                    <div style={rowStyle}>
                        <Node />
                        <Node />
                        <Node />
                        <Node />
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
// Generates a 15x15 grid
const generateGrid = () => {
    const grid = [];
    for(let r = 0; r < 15; r++){
        const row = [];
        for(let c = 0; c < 15; c++){
            row.push(generateNode(r,c));
        }
        grid.push(row);
    }
    console.log("generating grid");
    return grid;
};

// Creates a new node
const generateNode = (row, col) => {
    return {
        row,
        col,
        wall: false,
        visited: false
    }
}
 
export default Grid;