import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemStock from './ItemStock';
import updateFrozen from '../actions/frozenInvUpdate'
import { bindActionCreators } from 'redux'

class FrozenDept extends Component {

    render() { 
        this.props.updateFrozen();
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

// How we connect our component using this action creator to the dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}

// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);