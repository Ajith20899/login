import React from 'react';
import history from './history';
import {  Router, Route, Switch, withRouter } from "react-router-dom";
class Register extends React.Component{

    homePage = () => {
        history.push("/Login");
    }

    render(){
        return(
            <div className="RegisterContainPage">
                {console.log("3") }
                <h1>Register</h1>
                <Router history={history}>  
                    <Switch>
                        <Route exact
                            path="/"
                            component={withRouter(Register)}
                        />
                    </Switch>
                </Router>
                <button className="BackButton" onClick={this.homePage}>{"<--"}</button>
            </div>
        )
    }
}

export default Register