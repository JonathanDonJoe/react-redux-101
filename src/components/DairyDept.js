import React, { Component } from 'react';
import { connect } from 'react-redux';

class DairyDept extends Component {

    render() { 
        const dairy = this.props.dairyData.map((item,i )=> <h3 key={i}>{item.quantity} {item.food}</h3>)
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