import React, { Component } from 'react';
import DairyDept from './DairyDept';
import MeatDept from './MeatDept';
import FrozenDept from './FrozenDept'

class Main extends Component {

    render() { 
        return ( 
            <div>
                <MeatDept />
                <DairyDept />
                <FrozenDept />
            </div>
        );
    }
}

export default Main;