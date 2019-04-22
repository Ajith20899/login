import React from 'react';
import './loginCssCode.css';
import 'semantic-ui-css/semantic.min.css';
import history from '../../history'
class LoginPageConnect extends React.Component{

    login = () => {
        history.push('./login');
    }

    render() {
        return(
            <div>
                <button className="loginButton" onClick={this.login}>login</button>
            </div>
        )
    }
}

export default LoginPageConnect;