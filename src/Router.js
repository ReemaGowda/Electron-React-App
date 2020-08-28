import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Image from './Image';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/image" component={Image}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
 
export default Router;