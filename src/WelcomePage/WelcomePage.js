import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


// Welcome Page
class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            cisCourses: [],
            columnOrder: [],
            numberOfColumns: 0
        };
    }

    render() {
        return (
            <div>

                <NavLink  to="/main" >  Main page </NavLink>
    
            </div>
        );
    }

}

export default WelcomePage;