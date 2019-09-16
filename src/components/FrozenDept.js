import React, { Component } from 'react';
import { connect } from 'react-redux'

class FrozenDept extends Component {

    render() { 
        const frozen = this.props.frozenData.map((item,i )=> <h3 key={i}>{item.quantity} {item.food}</h3>)
        return ( 
            frozen
        );
    }
}

function mapStateToProps(state) {
    return {
        frozenData: state.frozen
    }
}

// export default FrozenDept;
export default connect(mapStateToProps,null)(FrozenDept);