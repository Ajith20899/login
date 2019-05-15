import React from 'react';
import NewPasswordComponent from './newPasswordComponent'

class Password extends React.Component{

        state = {
            passwordChange : true,
            emailValuePasswordContent : ''
        }

        onChange = (e) => {
            this.setState({
                emailValuePasswordContent : e.target.value
            })
        }

        submit = (e) => {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            let address = this.state.emailValuePasswordContent;
            if (reg.test(address) === false) 
            {
                e.preventDefault();
                alert('Invalid Email Address');
                this.refs.emailAddressInPassword.focus();
            }
            else {
                this.setState({
                    passwordChange : false
                },()=> {
                    console.log('passwordChecking')
                })
            }
        }

        render(){
        return( 
            <React.Fragment> 
                <section className="forgotPasswordContent"> 
                { 
                this.state.passwordChange === true ? 
                    <form onSubmit={this.submit} > 
                        <div className="emailBox"> 
                            <input type="text" 
                                autoComplete="off"
                                placeholder="Email" 
                                ref="emailAddressInPassword" 
                                value={this.state.emailValue}  
                                className="emailInputBoxInPasswordComponent"
                                onChange={this.onChange}
                                required
                            /> 
                            <input type="submit" 
                                value="Login" 
                                className="loginButonInputBoxInPasswordComponent" 
                                onClick={this.passwordComponent}
                            /> 
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