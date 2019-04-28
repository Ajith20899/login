import React from 'react';

class PasswordOTP extends React.Component{



    onKeyUp = (target ,e) => {

        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
            console.log(charCode)
            return false;
        }

        if( e.keyCode === 8 ){
            
            switch (target)  {
                case 'firstOtpInput' :
                    this.firstOtpInput.focus();
                    break;
                case 'secondOtpInput' :
                    this.firstOtpInput.focus();
                    break;
                case 'thirdOtpInput' :
                    this.secondOtpInput.focus();
                    break;
                case 'fourOtpInput' :
                    this.thirdOtpInput.focus();
                    break;
                case 'fiveOtpInput' :
                    this.fourOtpInput.focus();
                    break; 
                case 'sixOtpInput' :
                    this.fiveOtpInput.focus();
                    break;       
                default :
                    this.firstOtpInput.focus();
            }
        }
        else if(e.target.value !== (charCode > 31 && (charCode < 48 || charCode > 57))) {
        switch (target)  {
            case 'firstOtpInput' :
                this.secondOtpInput.focus();
                break;
            case 'secondOtpInput' :
                this.thirdOtpInput.focus();
                break;
            case 'thirdOtpInput' :
                this.fourOtpInput.focus();
                break;
            case 'fourOtpInput' :
                this.fiveOtpInput.focus();
                break;
            case 'fiveOtpInput' :
                this.sixOtpInput.focus();
                break; 
            case 'sixOtpInput' :
                break;       
            default :
                this.firstOtpInput.focus();
        }
    }
    else {
        alert('Only no')
    }
}

    render(){
        return(
            <React.Fragment>
                <h2>OTP</h2>
                <section className="PasswordOTPSection"> 
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.firstOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'firstOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.secondOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'secondOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.thirdOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'thirdOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.fourOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'fourOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.fiveOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'fiveOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            ref={(input) => {this.sixOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'sixOtpInput')} />
                </section>
            </React.Fragment>
        )
    }
}

export default PasswordOTP;