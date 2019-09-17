import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemStock from './ItemStock';
import updateDairy from '../actions/dairyInvUpdate'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';

class DairyDept extends Component {

    changeQuantity = (operation, indexToChange) => {
        this.props.updateDairy(operation, indexToChange)
    }

    render() { 
        const dairy = this.props.dairyData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} changeQuantity = {this.changeQuantity} index={i} />)
        return ( 
            dairy
        );
    }
}

function mapStateToProps(state) {

    return {
        dairyData: state.dairy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateDairy: updateDairy
    }, dispatch)
}

// export default DairyDept;
export default connect(mapStateToProps, mapDispatchToProps)(DairyDept)