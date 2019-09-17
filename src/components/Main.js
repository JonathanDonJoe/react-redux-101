import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemStock from './ItemStock';

class Main extends Component {

    render() { 
        const frozens = this.props.frozenData.map((item,i )=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food}  index={i}/>)
        const meat = this.props.meatData.map((item,i )=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food}  index={i}/>)
        const dairy = this.props.dairyData.map((item,i )=> <ItemStock key={item.food + i} quantity={item.quantity} food={item.food}  index={i}/>)

        return ( 
            [...frozens, ...meat, ...dairy]
        );
    }
}

function mapStatetoProps(state) {
    return {
        frozenData: state.frozen,
        meatData: state.meat,
        dairyData: state.dairy
    }
}

// export default Main;

export default connect(mapStatetoProps, null) (Main)