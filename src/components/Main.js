import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {

    render() { 

 
        const frozens = this.props.frozenData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)
        const meat = this.props.meatData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)
        const dairy = this.props.dairyData.map((item,i )=> <h3 key={item.food+i}>{item.quantity} {item.food}</h3>)

        return ( 
            [...frozens, ...meat, ...dairy]
        );
    }
}

function mapStatetoProps(state) {
    return {
        frozenData: state.frozen,
        meatData: state.meat,
        dairyData: state.dairy
    }
}

// export default Main;

export default connect(mapStatetoProps, null) (Main)