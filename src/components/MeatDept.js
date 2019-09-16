import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeatDept extends Component {

    render() { 
        console.log(this.props)
        const meat = this.props.meatData.map((item,i )=> <h1 key={i}>{item.quantity} {item.food}</h1>)
        console.log(meat)
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