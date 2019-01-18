import React, { Component } from 'react';
import './App.css';
import WelcomePage from "./WelcomePage/WelcomePage";
import MainPage from "./MainPage/MainPage";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted : false  //inital with unsubmitted
        }
        this.changeState = this.changeState.bind(this);
   }

    //this function will be passed to the child component and will be used to transfer data in child component in this main component
    changeState(state){
        console.log("State trigged by button")
        console.log(state);
        this.setState(
            {
                data:state,
                submitted : true
            }
        )
    }

    render() {
        //if the page just opened, display welcome page, or main page.
        var page =  <div>
                        <WelcomePage ParentSubmit={this.changeState} />
                    </div>
        if (this.state.submitted === true){
            page = <MainPage datapassed={this.state} />
        }
        console.log("State trigged by the App.js")
        console.log(this.state);
        return (
            <div>
                {page}
            </div>
        );
    }
}
export default App;
