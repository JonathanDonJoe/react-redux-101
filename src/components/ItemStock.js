import React, { Component } from 'react';

class ItemStock extends Component {
    render() { 
        return (
            <h3>{this.props.quantity} {this.props.food}</h3>
        );
    }
}
 
export default ItemStock;