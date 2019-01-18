import React, { Component } from 'react';


// Main Page
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.datapassed;
    }

    render() {
        console.log("State trigged at the main page")
        console.log(this.state);
        return (
           <p> main page </p>
        );
    }

}

export default MainPage;