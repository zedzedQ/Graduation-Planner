import React, { Component } from 'react';


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
        console.log(this.props.datapassed)
        return (
           <p> main page </p>
        );
    }

}

export default MainPage;