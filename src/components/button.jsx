import React, { Component } from 'react';

class Button extends Component {
    state = { 
        clicked: false
     }

    
    render() { 
        return (
            <button className="button">Generate Grid</button>
        );
    }
}
 
export default Button;