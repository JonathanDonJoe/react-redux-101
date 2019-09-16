import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemStock from './ItemStock';

class DairyDept extends Component {

    render() { 
        const dairy = this.props.dairyData.map((item, i)=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food} />)
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

// export default DairyDept;
export default connect(mapStateToProps, null)(DairyDept)