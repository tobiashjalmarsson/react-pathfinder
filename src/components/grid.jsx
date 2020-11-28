import React, { Component } from 'react';
import Square from './square'

class Grid extends Component {
    state = {  }
    
    render() {
        const style = {
            margin: "10px",
            justifyContent: "center"
        }; 
        return ( 
            <React.Fragment>
                    <Square />,
                    <Square />,
                    <Square />,
                    <Square />
            </React.Fragment>
         );
    }
}
 
export default Grid;