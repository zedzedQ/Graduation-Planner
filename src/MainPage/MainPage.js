import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


// Main Page


class MainPage extends Component {
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
           <p> main page </p>
        );
    }

}

export default MainPage;