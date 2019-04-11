import React from 'react';
import Login from './loginPageCreation/Login';
import history from './loginPageCreation/history';
import {  Router, Route, Switch, withRouter ,Redirect } from "react-router-dom";
class Password extends React.Component{

    state = {
        homePage : false
    }

    homePageChangeSet = () =>{ 
        this.setState({
            homePage : true
        })
    }

    render(){
        return(
            <div className="ForgotPasswordContainPage">
                {console.log("2") }
                <h1>Password</h1>
                <Router history={history}>  
                    <Switch>
                        <Route
                            exact strict
                            path="/Login"
                            component={withRouter(Login)}
                        />
                    </Switch>
                </Router>
                <button className="BackButton" onClick={this.homePageChangeSet}>{"<--"}</button>
                {this.state.homePage ? <Redirect to="/Login"/> : null}
            </div>
        )
    }
}

export default Password;