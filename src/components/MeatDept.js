import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeatDept extends Component {

    render() { 
        const meat = this.props.meatData.map((item,i )=> <h3 key={i}>{item.quantity} {item.food}</h3>)
        return ( 
            meat
        );
    }
}

function mapStateToProps(state) {
    // Takes 1 arg: state.  

    return {
        meatData: state.meat
    }
}

// export default MeatDept;
export default connect(mapStateToProps, null)(MeatDept);