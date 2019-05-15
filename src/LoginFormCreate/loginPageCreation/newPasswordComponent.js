import React from 'react';
import PasswordOTP from './passwordOTP';
import history from '../../history';

class NewPasswordComponent extends React.Component{

    state = {
        Value : ''
    }

    home = () => {
        history.push('/')
    }

    onKeyUp = (e) => {
        if(e.target.value >=0 && e.target.value <100000000000){
            this.setState({
                Value : e.target.value
            })
        }
        else 
        alert (e.target.value)
    }

    render() {
        return(
            <React.Fragment>
                <section>
                    <div className="NewPasswordComponent">
                    
                        <input type="password" placeholder="Create Password" className="createPassword"></input>
                        <input type="text" placeholder="Confirm Password" className="confirmPassword"></input>
                        <input type="text" placeholder="Mobile No" maxLength="10" className="mobileNumber" value={this.state.Value} onChange={this.onKeyUp}></input>

                        {/* OTP page call */}
                        <PasswordOTP />
                        <button onClick={this.home}>Submit</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default NewPasswordComponent;
