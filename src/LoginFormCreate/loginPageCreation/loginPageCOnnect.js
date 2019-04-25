import React from 'react';
import './loginCssCode.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './Login';
class LoginPageConnect extends React.Component{

    render() {
        return(

            // login page call
            <div>
                <Login />
            </div>
        )
    }
}

export default LoginPageConnect;