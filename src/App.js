import React from "react";
import history from './history';
import { Router, Route, Switch } from "react-router-dom";
import Home from './home.js';
import API from './api.js';
import Login from './login.js'
import './Generics/Common.css';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
    state = {
        homeBorder: '0px',
        apiBorder : '0px',
        loginBorder : '0px'
    }

    home = () => {
        history.push('/home');
        this.setState({
            homeBorder: '3px',
            apiBorder : '0px',
            loginBorder : '0px'
        })
    }
    api = () => {
        history.push('/restapi');
        this.setState({
            homeBorder: '0px',
            apiBorder : '3px',
            loginBorder : '0px'
        })
    }
    login = () => {
        history.push('/login');
        this.setState({
            homeBorder: '0px',
            apiBorder : '0px',
            loginBorder : '3px'
        })
    }

    componentWillMount () {

        if(window.location.pathname === '/login' ) 
            this.setState({
                homeBorder: '0px',
                apiBorder : '0px',
                loginBorder : '3px'
            })
        else if(window.location.pathname === '/restapi' ) 
            this.setState({
                homeBorder: '0px',
                apiBorder : '3px',
                loginBorder : '0px'
            })
        else 
        this.setState({
            homeBorder: '3px',
            apiBorder : '0px',
            loginBorder : '0px'
        })
    }


    render() {
        return (
            <div>
                <div className="nav-bar">
                    <nav>
                        <ul>
                            <li><span onClick={this.home} style={{ borderBottom: `${this.state.homeBorder} solid white` }}>Home</span></li>
                            <li><span onClick={this.api} style={{ borderBottom: `${this.state.apiBorder} solid white` }}>RestApi</span></li>
                            <li><span onClick={this.login} style={{ borderBottom: `${this.state.loginBorder} solid white` }}>Login</span></li>
                        </ul>
                    </nav>
                </div>
                < div >
                    <Router history={history}>
                        <Switch>
                            <Route
                                exact
                                strict
                                path="/"
                                component={Home}
                            />
                            <Route exact
                                strict
                                path="/restapi"
                                component={API}
                            />
                            <Route exact
                                strict
                                path="/login"
                                component={Login}
                            />
                            <Route
                                default
                                path="/home"
                                component={Home}
                            />
                        </Switch>
                    </Router>
                </div>
            </div >
        )
    }
}
export default App;