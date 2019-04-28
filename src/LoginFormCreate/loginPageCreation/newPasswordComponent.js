import React from 'react';
import PasswordOTP from './passwordOTP';
import history from '../../history';

class NewPasswordComponent extends React.Component{

    home = () => {
        history.push('/')
    }

    render() {
        return(
            <React.Fragment>
                <section>
                    <div className="NewPasswordComponent">
                        <input type="password" placeholder="Create Password" className="createPassword"></input>
                        <input type="text" placeholder="Confirm Password" className="confirmPassword"></input>
                        <input type="text" placeholder="Mobile No" className="mobileNumber"></input>

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
