import React, { Component } from 'react';
import { connect } from 'react-redux'

class FrozenDept extends Component {

    render() { 
        console.log(this.props)
        const frozen = this.props.frozenData.map((item,i )=> <h1 key={i}>{item.quantity} {item.food}</h1>)
        console.log(frozen)
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