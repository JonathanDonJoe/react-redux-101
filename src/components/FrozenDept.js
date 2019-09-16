import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemStock from './ItemStock';

class FrozenDept extends Component {

    render() { 
        const frozen = this.props.frozenData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} />)
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