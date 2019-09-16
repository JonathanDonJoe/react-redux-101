import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemStock from './ItemStock';

class MeatDept extends Component {

    render() { 
        const meat = this.props.meatData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} />)
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