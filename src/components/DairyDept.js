import React, { Component } from 'react';
import { connect } from 'react-redux';

class DairyDept extends Component {

    render() { 
        console.log(this.props)
        const dairy = this.props.dairyData.map((item,i )=> <h1 key={i}>{item.quantity} {item.food}</h1>)
        console.log(dairy)
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