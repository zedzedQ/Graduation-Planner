import React, { Component } from 'react';
import './App.css';

import WelcomePage from "./WelcomePage/WelcomePage";
import MainPage from "./MainPage/MainPage";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/main" exact component={MainPage} />
        </Switch>

        </BrowserRouter>


    );
  }
}
export default App;
