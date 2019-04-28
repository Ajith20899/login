import React from 'react';
import NewPasswordComponent from './newPasswordComponent'

class Password extends React.Component{

        state = {
            passwordChange : true
        }

        passwordComponent = () => {
            this.setState({
                passwordChange : false
            })
        }
        render(){
        return(
            <React.Fragment>
                <section className="forgotPasswordContent">
                {
                this.state.passwordChange === true ?
                    <form >
                        <div className="emailBox">
                            <input type="text" placeholder="Email" className="emailInputBoxInPasswordComponent"/>
                            <input type="button" 
                                value="Login" 
                                className="loginButonInputBoxInPasswordComponent" 
                                onClick={this.passwordComponent}/>
                        </div>
                    </form> 
                    : 
                    <NewPasswordComponent/>
                }
                </section>
            </React.Fragment>
        )
    }
}

export default Password;