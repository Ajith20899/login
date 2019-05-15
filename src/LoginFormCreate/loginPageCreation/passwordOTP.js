import React from 'react';

class PasswordOTP extends React.Component{

    state = {
        firstValue : '',
        secondValue : '',
        thirdValue : '' ,
        fourthValue : '' ,
        fifthValue :'' ,
        sixthValue : ''
    }

    onKeyUp = (target,e) => {
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
                case 'fifthOtpInput' :
                    this.fourOtpInput.focus();
                    break; 
                case 'sixOtpInput' :
                    this.fifthOtpInput.focus();
                    break;       
                default :
                    this.firstOtpInput.focus();
            }
        }
    }

    firstOnKeyUp = (target ,e) => {
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                firstValue : e.target.value
            });
            this.secondOtpInput.focus();
        }
    }
    secondOnKeyUp = (target ,e) => {
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                secondValue : e.target.value
            });
            this.thirdOtpInput.focus();
        }
    }
    thirdOnKeyUp = (target ,e) => {
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                thirdValue : e.target.value
            });
            this.fourOtpInput.focus();
        }
    }
    fourthOnKeyUp = (target ,e) => {
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                fourthValue : e.target.value
            });
            this.fifthOtpInput.focus();
        }

    }
    fifthOnKeyUp = (target ,e) => {
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                fifthValue : e.target.value
            });
            this.sixOtpInput.focus();
        }
    }
    sixthOnKeyUp = (target ,e) => {
        console.log(e.keyCode)
        if(e.target.value >=0 && e.target.value <=9)
        {
            this.setState({
                sixthValue : e.target.value
            });
            this.sixOtpInput.focus();     
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
                            value={this.state.firstValue}
                            ref={(input) => {this.firstOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'firstOtpInput')}
                            onChange ={this.firstOnKeyUp.bind(this,'firstOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            value={this.state.secondValue}
                            ref={(input) => {this.secondOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'secondOtpInput')}
                            onChange ={this.secondOnKeyUp.bind(this,'secondOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            value={this.state.thirdValue}
                            ref={(input) => {this.thirdOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'thirdOtpInput')}
                            onChange ={this.thirdOnKeyUp.bind(this,'thirdOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            value={this.state.fourthValue}
                            ref={(input) => {this.fourOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'fourOtpInput')}
                            onChange ={this.fourthOnKeyUp.bind(this,'fourOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            value={this.state.fifthValue}
                            ref={(input) => {this.fifthOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'fifthOtpInput')}
                            onChange ={this.fifthOnKeyUp.bind(this,'fifthOtpInput')} />
                        <input type="text" 
                            maxLength="1" 
                            className="PasswordOTPInputBox"
                            value={this.state.sixthValue}
                            ref={(input) => {this.sixOtpInput = input}}
                            onKeyUp ={this.onKeyUp.bind(this,'sixOtpInput')}
                            onChange ={this.sixthOnKeyUp.bind(this,'sixOtpInput')} />
                </section>
            </React.Fragment>
        )
    }
}

export default PasswordOTP;